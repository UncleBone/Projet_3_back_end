import { Injectable } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log("validateUser",email,password)
    const user = await this.userService.findUser({email});
    const bcrypt = require('bcrypt');
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: '1h'
      })
    };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}
