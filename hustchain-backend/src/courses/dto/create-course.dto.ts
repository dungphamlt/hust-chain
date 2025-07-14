import { IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  course_name!: string;

  @IsString()
  course_description!: string;

  @IsOptional()
  @IsString()
  course_image_url?: string;

  @IsOptional()
  @IsString()
  course_video_url?: string;

  @IsOptional()
  @IsNumber()
  course_price?: number;

  @IsOptional()
  @IsNumber()
  token_reward?: number;

  @IsOptional()
  @IsEnum(['active', 'draft', 'archived'])
  status?: 'active' | 'draft' | 'archived';
}
