import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import type { HUSTToken, RewardSystem, MockUSDT } from "../typechain-types";

async function main() {
  // Lấy signer và provider từ ethers
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;

  console.log("Deploying with account:", deployer.address);
  console.log(
    "Balance:",
    ethers.formatEther(await provider.getBalance(deployer.address)),
    "ETH"
  );

  // 1. Deploy MockUSDT
  const MockUSDT = await ethers.getContractFactory("MockUSDT");
  const mockUSDT = await MockUSDT.deploy();
  await mockUSDT.waitForDeployment();
  const mockUSDTAddress = await mockUSDT.getAddress();
  console.log("✅ MockUSDT deployed at:", mockUSDTAddress);

  // 2. Deploy HUSTToken
  const HUSTToken = await ethers.getContractFactory("HUSTToken");
  const hustToken = await HUSTToken.deploy();
  await hustToken.waitForDeployment();
  const hustTokenAddress = await hustToken.getAddress();
  console.log("✅ HUSTToken deployed at:", hustToken);

  // 3. Deploy RewardSystem
  const RewardSystem = await ethers.getContractFactory("RewardSystem");
  const rewardSystem = await RewardSystem.deploy(
    hustTokenAddress,
    mockUSDTAddress
  );
  await rewardSystem.waitForDeployment();
  const rewardSystemAddress = await rewardSystem.getAddress();
  console.log("✅ RewardSystem deployed at:", rewardSystemAddress);

  // 4. Lưu thông tin deployment
  saveDeploymentInfo({
    network: (await provider.getNetwork()).name,
    deployer: deployer.address,
    HUSTToken: hustTokenAddress,
    MockUSDT: mockUSDTAddress,
    RewardSystem: rewardSystemAddress,
    timestamp: new Date().toISOString(),
  });
}

function saveDeploymentInfo(info: object) {
  const dir = "./deployments";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, `deployment-${Date.now()}.json`);
  fs.writeFileSync(filePath, JSON.stringify(info, null, 2));
  console.log("📦 Deployment info saved at:", filePath);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
