"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// File: test/HUSTChain.test.ts
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
const utils_1 = require("ethers/lib/utils");
describe("HUSTChain", function () {
    let owner;
    let admin;
    let teacher;
    let student;
    let hustToken;
    let rewardSystem;
    let usdtMock;
    const INITIAL_SUPPLY = (0, utils_1.parseUnits)("1000000", 18); // Tổng cung ban đầu
    const REWARD_AMOUNT = (0, utils_1.parseUnits)("100", 18); // Số lượng token thưởng
    before(async function () {
        // Lấy danh sách các tài khoản
        [owner, admin, teacher, student] = (await hardhat_1.ethers.getSigners());
        // Deploy USDT Mock
        const USDTMock = await hardhat_1.ethers.getContractFactory("USDTMock");
        usdtMock = await USDTMock.deploy();
        await usdtMock.deployed();
        // Deploy HUST Token
        const HUSTToken = await hardhat_1.ethers.getContractFactory("HUSTToken");
        hustToken = await HUSTToken.deploy();
        await hustToken.deployed();
        // Deploy Reward System
        const RewardSystem = await hardhat_1.ethers.getContractFactory("RewardSystem");
        rewardSystem = await RewardSystem.deploy(hustToken.address, usdtMock.address);
        await rewardSystem.deployed();
        // Setup roles
        await rewardSystem.grantRole(await rewardSystem.DEFAULT_ADMIN_ROLE(), admin.address);
        await hustToken.transfer(rewardSystem.address, INITIAL_SUPPLY);
        await usdtMock.transfer(rewardSystem.address, INITIAL_SUPPLY);
    });
    describe("HUSTToken", function () {
        it("Should have correct initial supply", async function () {
            (0, chai_1.expect)(await hustToken.totalSupply()).to.equal(INITIAL_SUPPLY);
        });
        it("Should assign initial balance to deployer", async function () {
            (0, chai_1.expect)(await hustToken.balanceOf(owner.address)).to.equal(INITIAL_SUPPLY);
        });
        it("Should allow admin to grant minter role", async function () {
            await hustToken.grantMinterRole(admin.address);
            (0, chai_1.expect)(await hustToken.hasRole(await hustToken.MINTER_ROLE(), admin.address)).to.be.true;
        });
    });
    describe("RewardSystem", function () {
        it("Should deposit tokens correctly", async function () {
            const depositAmount = (0, utils_1.parseUnits)("500", 18);
            // Approve trước khi gửi token
            await hustToken.connect(admin).approve(rewardSystem.address, depositAmount);
            await usdtMock.connect(admin).approve(rewardSystem.address, depositAmount);
            await (0, chai_1.expect)(rewardSystem.connect(admin).depositTokens(depositAmount, depositAmount))
                .to.emit(rewardSystem, "TokensDeposited")
                .withArgs(admin.address, depositAmount, depositAmount);
        });
        it("Should reward student with HUST tokens", async function () {
            const initialBalance = await hustToken.balanceOf(student.address);
            await rewardSystem.connect(admin).rewardStudent(student.address, REWARD_AMOUNT, 0);
            (0, chai_1.expect)(await hustToken.balanceOf(student.address)).to.equal(initialBalance.add(REWARD_AMOUNT));
        });
        it("Should reward teacher with HUST tokens", async function () {
            const initialHust = await hustToken.balanceOf(teacher.address);
            await rewardSystem.connect(admin).rewardTeacher(teacher.address, REWARD_AMOUNT);
            (0, chai_1.expect)(await hustToken.balanceOf(teacher.address)).to.equal(initialHust.add(REWARD_AMOUNT));
        });
        it("Should prevent non-admin from rewarding", async function () {
            await (0, chai_1.expect)(rewardSystem.connect(student).rewardStudent(student.address, REWARD_AMOUNT, 0)).to.be.revertedWith("AccessControl:");
        });
    });
    describe("Edge Cases", function () {
        it("Should handle zero amount rewards", async function () {
            await (0, chai_1.expect)(rewardSystem.connect(admin).rewardStudent(student.address, 0, 0)).to.be.revertedWith("Must reward at least one token");
        });
        it("Should withdraw excess tokens correctly", async function () {
            const withdrawAmount = (0, utils_1.parseUnits)("100", 18);
            const initialBalance = await hustToken.balanceOf(admin.address);
            await rewardSystem.connect(admin).withdrawTokens(withdrawAmount, withdrawAmount);
            (0, chai_1.expect)(await hustToken.balanceOf(admin.address)).to.equal(initialBalance.add(withdrawAmount));
        });
    });
});
