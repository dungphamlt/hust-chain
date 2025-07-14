import { ethers } from "hardhat";
import type { HUSTToken, RewardSystem, MockUSDT } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("👤 Minting from:", deployer.address);

  // Địa chỉ contract HUSTToken đã được deploy
  const HUST_TOKEN_ADDRESS = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"; // ← Thay bằng địa chỉ thật

  // Kết nối với contract HUSTToken
  const HUSTTokenFactory = await ethers.getContractFactory("HUSTToken");
  const hustToken = HUSTTokenFactory.attach(HUST_TOKEN_ADDRESS) as HUSTToken;
  console.log("hustToken..........", hustToken);

  // Địa chỉ người nhận token
  const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // ← Thay bằng địa chỉ ví người nhận
  const amount = ethers.parseUnits("1000", 18); // mint 1000 HUST token

  // Gọi hàm mint
  const tx = await hustToken.mint(recipient, amount);
  console.log("🚀 Mint transaction sent:", tx.hash);

  await tx.wait();
  console.log(
    `✅ Minted ${ethers.formatUnits(amount, 18)} HUST tokens to ${recipient}`
  );

  // Kiểm tra số dư sau khi mint
  const balance = await hustToken.balanceOf(recipient);
  console.log(
    "💰 New balance of recipient:",
    ethers.formatUnits(balance, 18),
    "HUST"
  );
}

main().catch((error) => {
  console.error("❌ Minting failed:", error);
  process.exit(1);
});
