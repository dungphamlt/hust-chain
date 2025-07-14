import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from './dto/pagination.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 1. Tạo người dùng mới (Admin)
  @Post()
  @ApiOperation({ summary: 'Create new user (Admin only)' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: User,
    description: 'User created successfully',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden (requires admin role)',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // 2. Lấy danh sách người dùng (Admin)
  @Get()
  @ApiOperation({ summary: 'Get all users (Admin only)' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [User],
    description: 'List of users',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }

  // 3. Lấy thông tin chi tiết người dùng
  @Get(':id')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'User details',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found',
  })
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    // Admin có thể xem mọi profile, user chỉ xem được của mình
    console.log('Decoded user from token:', req.user,id); // Log thông tin user từ token
    if (req.user.role !== 'admin' && req.user.user_id !== +id) {
      throw new ForbiddenException('You can only view your own profile');
    }
    return this.usersService.findOne(+id);
  }

  // 4. Cập nhật thông tin người dùng
  @Patch(':id')
  @ApiOperation({ summary: 'Update user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'User updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden',
  })
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: RequestWithUser,
  ) {
    // Admin có thể sửa mọi user, user chỉ sửa được profile của mình
    if (req.user.role !== 'admin' && req.user.user_id !== +id) {
      throw new ForbiddenException('You can only update your own profile');
    }
    return this.usersService.update(+id, updateUserDto);
  }

  // 5. Xóa người dùng (Admin)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user (Admin only)' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden (requires admin role)',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // 6. Lấy thông tin người dùng hiện tại
  @Get('me/profile')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'Current user details',
  })
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: RequestWithUser) {
    return this.usersService.findOne(req.user.user_id);
  }

  // 7. Cập nhật địa chỉ ví của người dùng
  @Patch('me/update-wallet')
  @ApiOperation({ summary: 'Update wallet address' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'Wallet address updated',
  })
  @UseGuards(JwtAuthGuard)
  async updateWallet(
    @Body('wallet_address') walletAddress: string,
    @Req() req: RequestWithUser,
  ) {
    return this.usersService.updateWallet(req.user.user_id, walletAddress);
  }
}