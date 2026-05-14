import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/services/user.service';
import { UserRepo } from 'src/repository/user.repo';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.local.strategy';
import { PrismaService } from 'src/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService, UserService, LocalStrategy, PrismaService, JwtService, UserRepo, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
