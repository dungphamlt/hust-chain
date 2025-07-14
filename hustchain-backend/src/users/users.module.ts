import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Kết nối với bảng User trong database
  ],
  controllers: [UsersController], // Đăng ký UsersController
  providers: [UsersService], // Đăng ký UsersService
  exports: [UsersService], // Xuất UsersService để sử dụng ở các module khác
})
export class UsersModule {}