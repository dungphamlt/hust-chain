import { Controller, Get, Post, Body, Param, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { getLatestDeployAddress } from '../lastestDeployAddress';

@ApiTags('Blockchain')
@Controller('blockchain')
export class BlockchainController {
  constructor(
    @Inject(BlockchainService)
    private readonly blockchainService: BlockchainService,
  ) {}

  // Lấy số dư của một địa chỉ ví
  @Get('balance/:address')
  @ApiOperation({ summary: 'Get balance of an address' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Balance retrieved successfully',
    schema: {
      example: {
        HUST: '100.0',
        USDT: '50.0',
        ETH: '0.5',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid address',
  })
  async getBalance(@Param('address') address: string) {
    // Thêm validation cho địa chỉ ví
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new HttpException('Invalid Ethereum address', HttpStatus.BAD_REQUEST);
    }

    try {
      console.log('balance of address....', address);
      return await this.blockchainService.getBalance(address);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to retrieve balance',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Gửi phần thưởng cho sinh viên
  @Post('reward')
  @ApiOperation({ summary: 'Reward a student with HUST and USDT tokens' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Reward sent successfully',
    schema: {
      example: {
        txHash: '0x1234567890abcdef',
        from: '0xSenderAddress',
        to: '0xStudentAddress',
        amount: '100 HUST, 50 USDT',
        timestamp: '2023-01-01T00:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid request data',
  })
  async rewardStudent(
    @Body()
    body: {
      studentAddress: string;
      hustAmount: string;
      usdtAmount: string;
      privateKey: string;
    },
  ) {
    // Validate input
    if (!/^0x[a-fA-F0-9]{40}$/.test(body.studentAddress)) {
      throw new HttpException('Invalid student address', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.blockchainService.rewardStudent(
        body.studentAddress,
        body.hustAmount,
        body.usdtAmount,
        body.privateKey,
      );
      return {
        status: HttpStatus.CREATED,
        data: result,
      };
    } catch (error) {
      throw new HttpException(error instanceof Error ? error.message : 'Failed to send reward', HttpStatus.BAD_REQUEST);
    }
  }

  // Lấy địa chỉ contract mới nhất
  @Get('contract-address')
  @ApiOperation({ summary: 'Get latest contract addresses' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Latest contract addresses retrieved successfully',
    schema: {
      example: {
        HUSTToken: '0x1234567890abcdef1234567890abcdef12345678',
        RewardSystem: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
    },
  })
  getLatestAddresses() {
    const deploymentData = getLatestDeployAddress();
    if (!deploymentData) {
      throw new Error('Không thể tải địa chỉ contract từ file deployment.');
    }
    return {
      HUSTToken: deploymentData.HUSTToken,
      MockUSDT: deploymentData.MockUSDT,
      RewardSystem: deploymentData.RewardSystem,
    };
  }

  // Lấy lịch sử giao dịch của một địa chỉ
  @Get('transactions/:address')
  @ApiOperation({ summary: 'Get transaction history of an address' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Transaction history retrieved successfully',
    type: Array,
  })
  async getTransactionHistory(@Param('address') address: string) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new HttpException('Invalid Ethereum address', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.blockchainService.getTransactionHistory(address);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get transaction history';
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
