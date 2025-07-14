import { Request } from 'express';
import { User } from '../../users/user.entity';

/**
 * Interface mở rộng từ Request chuẩn của Express
 * Thêm trường `user` chứa thông tin người dùng đã xác thực
 */
export interface RequestWithUser extends Request {
  user: User & {
    /** Payload từ JWT token */
    tokenPayload?: {
      sub: number;    // user_id
      email: string;
      role: string;
      iat: number;   // issued at
      exp: number;   // expiration time
    };
  };
}