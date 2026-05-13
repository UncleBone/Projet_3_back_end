import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'; 
import { UserService } from 'src/services/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // constructor(private usersService: UsersService) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log("validateUser")
    const user = await this.userService.findUser({email});
    const bcrypt = require('bcrypt');
    console.log(password,user);
    if(user) console.log(password,user.password);
    if (user && bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
