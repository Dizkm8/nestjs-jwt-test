import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async create(createAuthDto: CreateAuthDto) {
    const payload = {
      sub: createAuthDto.rut,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
