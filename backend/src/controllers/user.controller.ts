import {
  Controller,
  Get,
  Post,
  Body,
  Request, UseGuards,
  BadRequestException
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { USERS } from '../generated/prisma/client';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService
  ) {}

  @Post('api/auth/register')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
    ) {
    let user: USERS | BadRequestException;
    try{
      user = await this.userService.createUser(userData);
    } catch(error){
      throw error;
    }
    return this.authService.login(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async loginUser( @Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/auth/me')
  getProfile(@Request() req) {
    return req.user;
  }

}
