import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { USERS } from '../generated/prisma/client';
import { UserRepo } from 'src/repository/user.repo';

@Injectable()
export class UserService {
  constructor(private repo: UserRepo) {}

  async findUser({ email }: { email: string }): Promise<USERS | null> {
    return this.repo.user({ email });
  }

  async findUserById({ userId }: { userId: number }): Promise<USERS | null> {
    return this.repo.userById({ userId });
  }

  async createUser(data: { name: string, email: string, password: string }) {
    if(!data || !data.name || !data.email || !data.password){
        throw new BadRequestException("Missing data")
    }
    const user = await this.findUser({ email: data.email });
    if(user !== null){
      throw new BadRequestException("Email already exists")
    }
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plaintextPassword = data.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    data.password = hash;
    
    return this.repo.createUser(data);
  }
}