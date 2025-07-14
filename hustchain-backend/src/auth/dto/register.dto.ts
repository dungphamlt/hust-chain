import { IsEmail, IsNotEmpty, IsEnum, MinLength } from 'class-validator';

export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export class RegisterDto {
  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  @IsNotEmpty()
  name!: string;

  @IsEnum(UserRole, { message: 'role must be student or teacher' })
  role!: UserRole;
}
