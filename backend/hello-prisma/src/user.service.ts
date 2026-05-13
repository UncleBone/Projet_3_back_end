import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { USERS, Prisma } from './generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    usersWhereUniqueInput: Prisma.USERSWhereUniqueInput,
  ): Promise<USERS | null> {
    return this.prisma.uSERS.findUnique({
      where: usersWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.USERSWhereUniqueInput;
    where?: Prisma.USERSWhereInput;
    orderBy?: Prisma.USERSOrderByWithRelationInput;
  }): Promise<USERS[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.uSERS.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.USERSCreateInput): Promise<USERS> {
    if(!data || !data.name || !data.email || !data.password){
        throw new BadRequestException("Missing data")
    }
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const plaintextPassword = data.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    data.password = hash;
    
    return this.prisma.uSERS.create({
      data,
    });
  }

  async loginUser({ email, password }): Promise<{ statusCode: number }> {
    console.log("login user",email,password);
    const user = await this.user( { email });
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

  async updateUser(params: {
    where: Prisma.USERSWhereUniqueInput;
    data: Prisma.USERSUpdateInput;
  }): Promise<USERS> {
    const { where, data } = params;
    return this.prisma.uSERS.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.USERSWhereUniqueInput): Promise<USERS> {
    return this.prisma.uSERS.delete({
      where,
    });
  }
}