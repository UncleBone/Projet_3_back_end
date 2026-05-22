import { Injectable } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { USERS } from 'src/generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUser({ email });
    const bcrypt = require('bcrypt');
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: USERS) {
    const payload = { email: user.email, sub: user.id };
    return {
        token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: '1h'
      }),
    };
  }
}
