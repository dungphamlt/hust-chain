// pagination.dto.ts
export class PaginationDto {
    readonly page?: number;
    readonly limit?: number;
    readonly search?: string;
    readonly status?: 'active' | 'draft' | 'archived';
  }