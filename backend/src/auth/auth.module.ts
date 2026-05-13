import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/services/user.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.local.strategy';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserRepo } from 'src/repository/user.repo';

@Module({
  providers: [AuthService, UserService, LocalStrategy, PrismaService, JwtService, UserRepo],
  imports: [PassportModule]
})
export class AuthModule {}
