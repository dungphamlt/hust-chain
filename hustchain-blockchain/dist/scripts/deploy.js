"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function main() {
    // Lấy signer và provider từ ethers
    const [deployer] = await hardhat_1.ethers.getSigners();
    const provider = hardhat_1.ethers.provider;
    console.log("Deploying with account:", deployer.address);
    console.log("Balance:", hardhat_1.ethers.formatEther(await provider.getBalance(deployer.address)), "ETH");
    // 1. Deploy MockUSDT
    const MockUSDT = await hardhat_1.ethers.getContractFactory("MockUSDT");
    const mockUSDT = await MockUSDT.deploy();
    await mockUSDT.waitForDeployment();
    const mockUSDTAddress = await mockUSDT.getAddress();
    console.log("✅ MockUSDT deployed at:", mockUSDTAddress);
    // 2. Deploy HUSTToken
    const HUSTToken = await hardhat_1.ethers.getContractFactory("HUSTToken");
    const hustToken = await HUSTToken.deploy();
    await hustToken.waitForDeployment();
    const hustTokenAddress = await hustToken.getAddress();
    console.log("✅ HUSTToken deployed at:", hustTokenAddress);
    // 3. Deploy RewardSystem
    const RewardSystem = await hardhat_1.ethers.getContractFactory("RewardSystem");
    const rewardSystem = await RewardSystem.deploy(hustTokenAddress, mockUSDTAddress);
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
function saveDeploymentInfo(info) {
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
