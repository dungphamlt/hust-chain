import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    console.log('User:', user); // Log thông tin người dùng
    console.log('Password:', password); // Log mật khẩu từ frontend
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    const { password: _, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.user_id, role: user.role };
    console.log('loginnnnnn', user);
    return {
      token: this.jwtService.sign(payload),
      user: {
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        wallet_address: user.wallet_address,
        role: user.role,
        createdAt: user.createdAt,
      },
    };
  }

  async register(dto: any) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new UnauthorizedException('Email already registered');
    return this.usersService.create(dto); // đã hash password trong UsersService
  }
}
