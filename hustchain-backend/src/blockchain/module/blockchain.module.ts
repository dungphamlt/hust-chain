// blockchain.module.ts
import { Module } from '@nestjs/common';
import { BlockchainProvider } from '../blockchain.provider';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { ContractAddressesProvider } from '../contracts.provider';

@Module({
  controllers: [BlockchainController],
  providers: [BlockchainProvider, BlockchainService, ContractAddressesProvider],
  exports: [BlockchainService],
})
export class BlockchainModule {}
