import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe, Request, UseGuards
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { USERS as UserModel } from '../generated/prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('api/auth/register')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
    ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  // @UseGuards(AuthGuard('local'))
  @Post('api/auth/login')
  async loginUser(
    // @Request() req) {
    //   console.log('login',req)
    //   return req.user;
    // }
    @Body() userData: { email: string; password: string },
    ): Promise<{ statusCode: number }> {
      console.log("controller loginUser",userData)
    return this.userService.loginUser(userData);
  }
}
