import { Provider } from '@nestjs/common';
import { JsonRpcProvider } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

export const BlockchainProvider: Provider = {
  provide: 'BLOCKCHAIN_PROVIDER',
  useFactory: async () => {
    const rpcUrl = process.env.BLOCKCHAIN_RPC;

    if (!rpcUrl) throw new Error('Missing BLOCKCHAIN_RPC in .env');

    const provider = new JsonRpcProvider(rpcUrl);

    try {
      const network = await provider.getNetwork();
      const networkName = network.name === 'unknown' ? 'local' : network.name;

      console.log(
        `🌐 Connected to ${networkName} (Chain ID: ${network.chainId})`,
      );
      return provider;
    } catch (error) {
      console.error('❌ Failed to connect to blockchain:', error);
      throw new Error(`Failed to connect to ${rpcUrl}`);
    }
  },
};
// import { Provider } from '@nestjs/common';
// import { JsonRpcProvider } from 'ethers';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const BlockchainProvider: Provider = {
//   provide: 'BLOCKCHAIN_PROVIDER',
//   useFactory: async () => {
//     try {
//       const rpcUrl = process.env.SEPOLIA_RPC_URL;

//       // Ensure URL is defined and properly formatted
//       if (!rpcUrl || !rpcUrl.startsWith('http')) {
//         throw new Error(
//           'RPC URL must be defined and start with http:// or https://',
//         );
//       }

//       const provider = new JsonRpcProvider(rpcUrl);

//       // Verify connection by fetching network info
//       const network = await provider.getNetwork();
//       console.log(
//         `Connected to: ${network.name} (Chain ID: ${network.chainId})`,
//       );

//       return provider;
//     } catch (error) {
//       console.error('Blockchain provider initialization failed:', error);
//       throw new Error(`Failed to initialize provider: ${error}`);
//     }
//   },
// };
