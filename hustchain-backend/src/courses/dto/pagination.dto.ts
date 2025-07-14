// // pagination.dto.ts
// export class PaginationDto {
//     readonly page?: number;
//     readonly limit?: number;
//     readonly search?: string;
//     readonly status?: 'active' | 'draft' | 'archived';
//   }

import { IsOptional, IsInt, IsString, IsIn, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly limit?: number;

  @IsOptional()
  @IsString()
  readonly search?: string;

  @IsOptional()
  @IsIn(['active', 'draft', 'archived'])
  readonly status?: 'active' | 'draft' | 'archived';
}
