// transaction.entity.ts
export class Transaction {
  txHash!: string;
  from!: string;
  to!: string;
  amount!: string;
  timestamp!: Date;
  network?: string; // Thêm dấu ? để biến này optional
  chainId?: number; // Thêm dấu ? để biến này optional
}
