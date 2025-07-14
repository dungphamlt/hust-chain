import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Lấy JWT từ header Authorization
      ignoreExpiration: false, // Không bỏ qua expiration của token
      secretOrKey: configService.get<string>('JWT_SECRET')!, // Lấy secret từ biến môi trường
    });
  }

  async validate(payload: any) {
    // Payload là dữ liệu được giải mã từ JWT
    return { user_id: payload.sub, email: payload.email, role: payload.role };
  }
}