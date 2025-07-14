import { IsInt, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsInt()
  userId!: number;

  @IsInt()
  courseId!: number;

  @IsString()
  txHash?: string;
}
