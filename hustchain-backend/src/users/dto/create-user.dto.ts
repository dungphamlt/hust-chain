import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';

export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole; // Sử dụng enum thay vì string

  @IsOptional()
  @IsString()
  wallet_address?: string;

  @IsOptional()
  @IsString()
  avatar_url?: string;
}
