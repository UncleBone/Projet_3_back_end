import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { USERS } from '../generated/prisma/client';
import { UserRepo } from 'src/repository/user.repo';
import { UserResponseDto } from 'src/dto/user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private repo: UserRepo) {}

  async findUser({ email }: { email: string }): Promise<USERS | null> {
    return this.repo.user({ email });
  }

  async findUserById({ userId }: { userId: number }): Promise<UserResponseDto | null> {
    const user = await this.repo.userById({ userId });
    return plainToInstance(UserResponseDto, user, {
      excludeExtraneousValues: true,
    });
  }

  async createUser(data: { name: string; email: string; password: string }) {
    if (!data || !data.name || !data.email || !data.password) {
      throw new BadRequestException('Missing data');
    }
    const user = await this.findUser({ email: data.email });
    if (user !== null) {
      throw new BadRequestException('Email already exists');
    }
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plaintextPassword = data.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    data.password = hash;

    return this.repo.createUser(data);
  }

  async getUser(id: number): Promise<UserResponseDto | null> {
    const user = await this.findUserById({ userId: id });
    if (user === null) {
      throw new NotFoundException('Identifiant inconnu');
    }
    return user;
  }
}
