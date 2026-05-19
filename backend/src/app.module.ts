import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserRepo } from './repository/user.repo';
import { UserController } from './controllers/user.controller';
import { RentalController } from './controllers/rental.controller';
import { RentalService } from './services/rental.service';
import { RentalRepo } from './repository/rental.repo';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController,UserController,RentalController],
  providers: [AppService, UserService, PrismaService, UserRepo, RentalService, RentalRepo ],
})
export class AppModule {}
