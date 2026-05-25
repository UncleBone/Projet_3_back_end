import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  UseGuards,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { USERS } from '../generated/prisma/client';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @ApiOperation({ description: 'Register a new user' })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Fields are missing, or email already exists.',
  })
  @ApiOkResponse({
    description: 'New user succesfully registered.',
    schema: {
      type: 'object',
      properties: { token: { type: 'string' } },
    },
  })
  @Post('api/auth/register')
  async signupUser(@Body() userData: CreateUserDto) {
    let user: USERS | BadRequestException;
    try {
      user = await this.userService.createUser(userData);
    } catch (error) {
      throw error;
    }
    return this.authService.login(user);
  }

  @ApiOperation({ description: 'Login user' })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid email or password',
  })
  @ApiOkResponse({
    description: 'When the login is succesful.',
    schema: {
      type: 'object',
      properties: { token: { type: 'string' } },
    },
  })
  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async loginUser(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ description: 'Get current user' })
  @ApiUnauthorizedResponse({
    description: 'Invalid or missing access token',
  })
  @ApiOkResponse({
    description: 'Return current user info.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        email: { type: 'string' },
        name: { type: 'string' },
        password: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/auth/me')
  getProfile(@Request() req) {
    return this.userService.findUserById(req.user);
  }

  @ApiUnauthorizedResponse({
    description: 'Invalid or missing access token',
  })
  @ApiOperation({ description: 'Get user by ID' })
  @ApiNotFoundResponse({
    description: 'unknown user ID',
  })
  @ApiOkResponse({
    description: 'Return user info.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        email: { type: 'string' },
        name: { type: 'string' },
        password: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/user/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }
}
