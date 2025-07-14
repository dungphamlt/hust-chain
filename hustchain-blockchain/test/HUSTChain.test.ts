import { expect } from "chai";
import { ethers } from "hardhat";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { HUSTToken, MockUSDT, RewardSystem } from "../typechain-types";

describe("HUSTChain", function () {
  let owner: HardhatEthersSigner;
  let admin: HardhatEthersSigner;
  let teacher: HardhatEthersSigner;
  let student: HardhatEthersSigner;
  let hustToken: HUSTToken;
  let rewardSystem: RewardSystem;
  let usdtMock: MockUSDT;

  // Constants
  const HUST_INITIAL_SUPPLY = ethers.parseUnits("1000000000", 18);
  const USDT_INITIAL_SUPPLY = ethers.parseUnits("1000000", 18);
  const REWARD_AMOUNT = ethers.parseUnits("100", 18);
  const TRANSFER_TO_REWARD_SYSTEM = ethers.parseUnits("900000000", 18); // 90% of supply
  // Transfer tokens to admin for testing
  const adminHustAmount = ethers.parseUnits("1000", 18);
  const adminUsdtAmount = ethers.parseUnits("1000", 18);

  const studentAmount = ethers.parseUnits("1000", 18);
  const depositAmount = ethers.parseUnits("500", 18);

  before(async function () {
    // Get signers
    [owner, admin, teacher, student] = await ethers.getSigners();

    // Deploy MockUSDT
    const MockUSDT = await ethers.getContractFactory("MockUSDT");
    usdtMock = await MockUSDT.deploy();
    await usdtMock.waitForDeployment();
    await usdtMock.mint(owner.address, USDT_INITIAL_SUPPLY);

    // Deploy HUSTToken
    const HUSTToken = await ethers.getContractFactory("HUSTToken");
    hustToken = await HUSTToken.deploy();
    await hustToken.waitForDeployment();

    // Verify initial mint
    expect(await hustToken.balanceOf(owner.address)).to.equal(
      HUST_INITIAL_SUPPLY
    );
    expect(await hustToken.totalSupply()).to.equal(HUST_INITIAL_SUPPLY);

    // Deploy RewardSystem
    const RewardSystem = await ethers.getContractFactory("RewardSystem");
    rewardSystem = await RewardSystem.deploy(
      await hustToken.getAddress(),
      await usdtMock.getAddress()
    );
    await rewardSystem.waitForDeployment();

    // Setup roles
    await rewardSystem.grantRole(
      await rewardSystem.DEFAULT_ADMIN_ROLE(),
      admin.address
    );

    // Transfer tokens to RewardSystem (approve first)
    await hustToken.approve(rewardSystem.target, TRANSFER_TO_REWARD_SYSTEM);
    await usdtMock.approve(rewardSystem.target, USDT_INITIAL_SUPPLY);

    await hustToken.transfer(rewardSystem.target, TRANSFER_TO_REWARD_SYSTEM);
    await usdtMock.transfer(rewardSystem.target, USDT_INITIAL_SUPPLY);

    await hustToken.transfer(admin.address, adminHustAmount);
    await usdtMock.transfer(admin.address, adminUsdtAmount);

    // Transfer tokens to student for enrollCoure
    await hustToken.transfer(student.address, studentAmount);
    await usdtMock.transfer(student.address, studentAmount);

    // Then have the student approve the RewardSystem to spend their tokens
    await hustToken
      .connect(student)
      .approve(rewardSystem.target, studentAmount);
    await usdtMock.connect(student).approve(rewardSystem.target, studentAmount);

    // Verify balances after transfer
    expect(await hustToken.balanceOf(owner.address)).to.equal(
      HUST_INITIAL_SUPPLY -
        TRANSFER_TO_REWARD_SYSTEM -
        adminHustAmount -
        studentAmount
    );
    expect(await hustToken.balanceOf(rewardSystem.target)).to.equal(
      TRANSFER_TO_REWARD_SYSTEM
    );
    expect(await hustToken.balanceOf(admin.address)).to.equal(adminHustAmount);

    expect(await usdtMock.balanceOf(admin.address)).to.equal(adminUsdtAmount);
  });

  describe("HUSTToken", function () {
    it("Should have correct initial supply", async function () {
      expect(await hustToken.totalSupply()).to.equal(HUST_INITIAL_SUPPLY);
    });

    it("Should assign initial balance to deployer", async function () {
      expect(await hustToken.balanceOf(owner.address)).to.equal(
        HUST_INITIAL_SUPPLY -
          TRANSFER_TO_REWARD_SYSTEM -
          adminHustAmount -
          studentAmount
      );
    });

    it("Should allow owner to grant minter role", async function () {
      await hustToken.grantRole(await hustToken.MINTER_ROLE(), admin.address);
      expect(
        await hustToken.hasRole(await hustToken.MINTER_ROLE(), admin.address)
      ).to.be.true;
    });
  });

  describe("RewardSystem", function () {
    it("Should have correct initial token balances", async function () {
      expect(await hustToken.balanceOf(rewardSystem.target)).to.equal(
        TRANSFER_TO_REWARD_SYSTEM
      );
      expect(await usdtMock.balanceOf(rewardSystem.target)).to.equal(
        USDT_INITIAL_SUPPLY
      );
    });

    describe("Deposit Functionality", function () {
      it("Should deposit tokens correctly", async function () {
        console.log(
          "balance of Admin:",
          await hustToken.balanceOf(admin.address)
        );

        await hustToken
          .connect(admin)
          .approve(rewardSystem.target, depositAmount);
        await usdtMock
          .connect(admin)
          .approve(rewardSystem.target, depositAmount);

        await expect(
          rewardSystem
            .connect(admin)
            .depositTokens(depositAmount, depositAmount)
        )
          .to.emit(rewardSystem, "TokensDeposited")
          .withArgs(admin.address, depositAmount, depositAmount);
      });
    });
    describe("EnrollCourse Functionality", function () {
      it("Should enroll student in course", async function () {
        const enrollMount = ethers.parseUnits("100", 18);
        console.log(
          student.address,
          await hustToken.balanceOf(student),
          "student address"
        );
        await expect(
          rewardSystem.connect(student).enrollCourse(enrollMount, enrollMount)
        )
          .to.emit(rewardSystem, "EnrolledCourse")
          .withArgs(student.address, enrollMount, enrollMount);
      });
    });
    // describe("Get Balance Functionality", function () {
    //   it("Should return correct contract balance", async function () {
    //     const balance = await rewardSystem.getBalances();

    //     // Expected HUST balance:
    //     // TRANSFER_TO_REWARD_SYSTEM: ban đầu nạp vào contract
    //     // + depositAmount: admin gửi thêm
    //     // - enrollMount: student enroll trừ đi
    //     // - 2 * REWARD_AMOUNT: reward cho student & teacher trừ đi
    //     const expectedHustBalance =
    //       TRANSFER_TO_REWARD_SYSTEM +
    //       depositAmount -
    //       ethers.parseUnits("100", 18) - // enrollCourse
    //       REWARD_AMOUNT * 2n; // reward student + teacher

    //     // Expected USDT balance:
    //     const expectedUsdtBalance =
    //       USDT_INITIAL_SUPPLY + depositAmount - ethers.parseUnits("100", 18); // enrollCourse

    //     expect(balance[0]).to.equal(expectedHustBalance); // HUST balance
    //     expect(balance[1]).to.equal(expectedUsdtBalance); // USDT balance
    //   });
    // });

    describe("Withdraw Functionality", function () {
      it("Should withdraw tokens correctly", async function () {
        const withdrawAmount = ethers.parseUnits("100", 18);
        const initialBalance = await hustToken.balanceOf(admin.address);

        await rewardSystem
          .connect(admin)
          .withdrawTokens(withdrawAmount, withdrawAmount);

        expect(await hustToken.balanceOf(admin.address)).to.equal(
          initialBalance + withdrawAmount
        );
      });

      it("Should prevent non-admin from withdrawing", async function () {
        await expect(
          rewardSystem
            .connect(student)
            .withdrawTokens(REWARD_AMOUNT, REWARD_AMOUNT)
        ).to.be.revertedWithCustomError(
          rewardSystem,
          "AccessControlUnauthorizedAccount"
        );
      });
    });

    describe("Reward Functionality", function () {
      it("Should reward student with HUST tokens", async function () {
        const initialBalance = await hustToken.balanceOf(student.address);

        await rewardSystem
          .connect(admin)
          .rewardToken(student.address, REWARD_AMOUNT, 0);

        expect(await hustToken.balanceOf(student.address)).to.equal(
          initialBalance + REWARD_AMOUNT
        );
      });

      it("Should reward teacher with HUST tokens", async function () {
        const initialBalance = await hustToken.balanceOf(teacher.address);

        await rewardSystem
          .connect(admin)
          .rewardToken(teacher.address, REWARD_AMOUNT, 0);

        expect(await hustToken.balanceOf(teacher.address)).to.equal(
          initialBalance + REWARD_AMOUNT
        );
      });

      it("Should prevent non-admin from rewarding", async function () {
        await expect(
          rewardSystem
            .connect(student)
            .rewardToken(student.address, REWARD_AMOUNT, 0)
        ).to.be.revertedWithCustomError(
          rewardSystem,
          "AccessControlUnauthorizedAccount"
        );
      });
    });

    describe("Edge Cases", function () {
      // it("Should revert when rewarding zero amount", async function () {
      //   await expect(
      //     rewardSystem.connect(admin).rewardStudent(student.address, 0, 0)
      //   ).to.be.revertedWith("Must reward at least one token");
      // });

      it("Should withdraw excess tokens correctly", async function () {
        const withdrawAmount = ethers.parseUnits("100", 18);
        const initialBalance = await hustToken.balanceOf(admin.address);

        await rewardSystem
          .connect(admin)
          .withdrawTokens(withdrawAmount, withdrawAmount);

        expect(await hustToken.balanceOf(admin.address)).to.equal(
          initialBalance + withdrawAmount
        );
      });
    });
  });
});
