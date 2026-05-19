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
import { MessageService } from './services/message.service';
import { MessageRepo } from './repository/message.repo';
import { MessageController } from './controllers/message.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController,UserController,RentalController, MessageController],
  providers: [AppService, UserService, PrismaService, UserRepo, RentalService, RentalRepo, MessageService, MessageRepo ],
})
export class AppModule {}
