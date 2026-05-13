import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { USERS, Prisma } from '../generated/prisma/client';
import { UserRepo } from 'src/repository/user.repo';

@Injectable()
export class UserService {
  constructor(private repo: UserRepo) {}

  async findUser({ email }: { email: string }): Promise<USERS | null> {
    return this.repo.user({ email });
  }

  async createUser(data: { name: string, email: string, password: string }): Promise<USERS> {
    if(!data || !data.name || !data.email || !data.password){
        throw new BadRequestException("Missing data")
    }
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plaintextPassword = data.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    data.password = hash;
    
    return this.repo.createUser(data)
  }

  async loginUser({ email, password }): Promise<{ statusCode: number }> {
    console.log("login user",email,password);
    const user = await this.findUser( { email });
    const bcrypt = require('bcrypt');
    console.log("login user",user);

    if(user === null){
        throw new UnauthorizedException();
    }
    if(!bcrypt.compareSync(password, user["password"])){
        throw new UnauthorizedException();
    }
    return { "statusCode": 200 }
  }

  // async updateUser(params: {
  //   where: Prisma.USERSWhereUniqueInput;
  //   data: Prisma.USERSUpdateInput;
  // }): Promise<USERS> {
  //   const { where, data } = params;
  //   return this.prisma.uSERS.update({
  //     data,
  //     where,
  //   });
  // }

  // async deleteUser(where: Prisma.USERSWhereUniqueInput): Promise<USERS> {
  //   return this.prisma.uSERS.delete({
  //     where,
  //   });
  // }
}