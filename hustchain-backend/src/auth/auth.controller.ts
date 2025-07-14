import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/users/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() dto: LoginDto, @Request() req: RequestWithUser) {
    console.log('Login DTO:', dto); // Log dữ liệu đầu vào
    return this.authService.login(req.user);
  }

  @Post('logout')
  logout() {
    // frontend chỉ cần xoá token localStorage; hoặc implement thêm JWT blacklist nếu muốn
    return { message: 'Logged out successfully' };
  }
}
