import * as fs from 'fs';
import * as path from 'path';

function getLatestDeploymentData(): Record<string, string> | null {
  const deploymentsDir = path.resolve(
    __dirname,
    '../../../../hustchain-blockchain/deployments',
  );
  // console.log(deploymentsDir, 'deploymentsDir');
  const deploymentFiles = fs.readdirSync(deploymentsDir);

  if (deploymentFiles.length === 0) {
    console.error('Không tìm thấy file deployment nào.');
    return null;
  }

  // Sắp xếp các file deployment theo timestamp trong tên file
  const latestFile = deploymentFiles.sort((a, b) => {
    const timeA = parseInt(a.split('-')[1].split('.')[0], 10);
    const timeB = parseInt(b.split('-')[1].split('.')[0], 10);
    return timeB - timeA;
  })[0];

  // Đọc nội dung file deployment mới nhất
  const filePath = path.join(deploymentsDir, latestFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const deploymentData = JSON.parse(fileContent);
  return deploymentData;
}
export const getLatestDeployAddress = (): Record<string, string> | null => {
  const deploymentData = getLatestDeploymentData();
  if (!deploymentData) {
    throw new Error('Không thể tải địa chỉ contract từ file deployment.');
  }

  return {
    HUSTToken: deploymentData.HUSTToken,
    MockUSDT: deploymentData.MockUSDT,
    RewardSystem: deploymentData.RewardSystem,
  };
};
