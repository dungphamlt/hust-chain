import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Đăng ký chiến lược mặc định là 'jwt'
    UsersModule, // Import UsersModule để truy cập thông tin người dùng
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule để sử dụng biến môi trường
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Lấy secret từ file .env
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '24h'),
        }, // Thời gian hết hạn token
      }),
    }),
  ],
  controllers: [AuthController], // Đăng ký AuthController
  providers: [
    AuthService, // Đăng ký AuthService
    LocalStrategy, // Đăng ký chiến lược LocalStrategy
    JwtStrategy, // Đăng ký chiến lược JwtStrategy
  ],
  exports: [
    AuthService, // Xuất AuthService để sử dụng ở các module khác
    JwtModule, // Xuất JwtModule để sử dụng JwtService ở các module khác
  ],
})
export class AuthModule {}
