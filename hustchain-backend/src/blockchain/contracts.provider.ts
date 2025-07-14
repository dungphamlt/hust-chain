import { Provider } from '@nestjs/common';
import { getLatestDeployAddress } from './lastestDeployAddress';

export const ContractAddressesProvider: Provider = {
  provide: 'CONTRACT_ADDRESSES',
  useValue: (() => {
    const deploymentData = getLatestDeployAddress();
    if (!deploymentData) {
      throw new Error('Không thể tải địa chỉ contract từ file deployment.');
    }

    return {
      HUSTToken: deploymentData.HUSTToken,
      RewardSystem: deploymentData.RewardSystem,
    };
  })(),
};
