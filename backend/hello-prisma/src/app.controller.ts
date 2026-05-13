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
import { UserService } from './user.service';
import { USERS as UserModel } from './generated/prisma/client';
import { AppService, type Project } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
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
    return this.userService.loginUser(userData);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("projects/:id")
  getProject(@Param("id", ParseIntPipe) id): Project {
    return this.appService.getProject(id)
  }
}
