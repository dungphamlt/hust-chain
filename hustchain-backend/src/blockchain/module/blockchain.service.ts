// src/blockchain/blockchain.service.ts
import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import {
  JsonRpcProvider,
  formatUnits,
  parseUnits,
  formatEther,
  Wallet,
  Contract,
} from 'ethers';

import { HUSTToken__factory } from '@typechain/factories/contracts/HUSTToken__factory';
import { RewardSystem__factory } from '@typechain/index';
import type { RewardSystem } from '@typechain/contracts/RewardSystem';
import type { HUSTToken } from '@typechain/contracts';

import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class BlockchainService implements OnModuleInit {
  private chainId!: number;
  private networkName!: string;

  constructor(
    @Inject('BLOCKCHAIN_PROVIDER')
    private readonly provider: JsonRpcProvider,

    @Inject('CONTRACT_ADDRESSES')
    private readonly contractAddresses: {
      HUSTToken: string;
      RewardSystem: string;
    },
  ) {}

  async onModuleInit() {
    try {
      // Wait for provider to be ready
      await this.provider.ready;

      const network = await this.provider.getNetwork();
      this.chainId = Number(network.chainId);
      this.networkName = network.name;

      console.log(
        `Connected to network: ${this.networkName} (Chain ID: ${this.chainId})`,
      );
    } catch (error) {
      console.error('Failed to initialize blockchain provider:', error);
      throw new Error('Failed to connect to blockchain network');
    }
  }

  //  Kết nối tới HUSTToken contract
  private getHUSTTokenContract(signer?: Wallet): HUSTToken {
    console.log('Husttoken Address1111:', this.contractAddresses.HUSTToken);
    return HUSTToken__factory.connect(
      this.contractAddresses.HUSTToken,
      signer || this.provider,
    );
  }

  //  Kết nối tới RewardSystem contract
  private getRewardSystemContract(signer?: Wallet) {
    console.log(
      'RewardSystem Address1111:',
      this.contractAddresses.RewardSystem,
    );
    if (!this.contractAddresses.RewardSystem) {
      throw new Error('RewardSystem address is missing!');
    }
    return RewardSystem__factory.connect(
      this.contractAddresses.RewardSystem,
      signer || this.provider,
    );
  }

  // Lấy số dư HUST, USDT và ETH của một địa chỉ ví
  async getBalance(
    address: string,
  ): Promise<{ HUST: string; USDT: string; ETH: string }> {
    try {
      const hustToken = this.getHUSTTokenContract();
      const rewardSystem = this.getRewardSystemContract();
      console.log(
        'RewardSystem contract address:',
        this.contractAddresses.RewardSystem,
      );
      console.log('RewardSystem contract instance:', rewardSystem);

      if (!rewardSystem) {
        throw new Error('RewardSystem contract is not initialized');
      }

      const [hustBalance, usdtAddress, ethBalance] = await Promise.all([
        hustToken.balanceOf(address),
        rewardSystem.usdtToken(),
        this.provider.getBalance(address),
      ]);

      // USDT có thể có số decimal khác nhau trên các mạng khác nhau
      const usdtDecimals = this.chainId === 31337 ? 18 : 6; // 6 là chuẩn cho USDT trên mainnet/testnets

      const usdtContract = new Contract(
        usdtAddress,
        ['function balanceOf(address) view returns (uint256)'],
        this.provider,
      );

      const usdtBalance = await usdtContract.balanceOf(address);

      return {
        HUST: formatUnits(hustBalance, 18),
        USDT: formatUnits(usdtBalance, usdtDecimals),
        ETH: formatEther(ethBalance),
      };
    } catch (error) {
      console.error('Error in getBalance:', error);
      throw new Error('Failed to fetch balance');
    }
  }

  // Gửi phần thưởng cho sinh viên từ địa chỉ ví private
  async rewardStudent(
    studentAddress: string,
    hustAmount: string,
    usdtAmount: string,
    privateKey: string,
  ): Promise<Transaction> {
    try {
      const wallet = new Wallet(privateKey, this.provider);
      const rewardSystem = this.getRewardSystemContract(wallet);

      // Xử lý số decimal khác nhau cho USDT dựa trên mạng
      const usdtDecimals = this.chainId === 31337 ? 18 : 6;

      const tx = await rewardSystem.rewardToken(
        studentAddress,
        parseUnits(hustAmount, 18),
        parseUnits(usdtAmount, usdtDecimals),
        { gasLimit: 500000 }, // Thêm gas limit để tương thích tốt hơn
      );

      const receipt = await tx.wait(); // Chờ xác nhận giao dịch

      return {
        txHash: tx.hash,
        from: wallet.address,
        to: studentAddress,
        amount: `${hustAmount} HUST, ${usdtAmount} USDT`,
        timestamp: new Date(),
        network: this.networkName,
        chainId: this.chainId,
      };
    } catch (error) {
      console.error('Error in rewardStudent:', error);
      throw new Error('Failed to reward student');
    }
  }

  // // Đăng ký khoá học
  // async enrollCoure(hustAmount:number, usdtAmount:number): Promise<Transaction> {
  //   try {
  //     const rewardSystem = this.getRewardSystemContract();
  //     const tx = await rewardSystem.enrollCourse(
  //       hustAmount,
  //       usdtAmount
  //     );
  //     const receipt = await tx.wait(); // Chờ xác nhận giao dịch
  //     return {
  //       txHash: tx.hash,
  //       amount: `Enrolled in course ${hustAmount}`,
  //       timestamp: new Date(),
  //       network: this.networkName,
  //       chainId: this.chainId,
  //     };
  //   } catch (error) {
  //     console.error('Error in enrollCourse:', error);
  //     throw new Error('Failed to enroll in course');
  //   }
  // };

  // Lấy thông tin mạng hiện tại
  getNetworkInfo(): { name: string; chainId: number } {
    return {
      name: this.networkName,
      chainId: this.chainId,
    };
  }

  // TODO: Lấy lịch sử giao dịch (sẽ triển khai sau)
  async getTransactionHistory(address: string): Promise<Transaction[]> {
    // Có thể tích hợp Etherscan API hoặc The Graph
    return [];
  }
}
