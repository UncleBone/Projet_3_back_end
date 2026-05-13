import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { USERS, Prisma } from '../generated/prisma/client';

@Injectable()
export class UserRepo {
  constructor(private prisma: PrismaService) {}

  async user({ email }: { email: string }): Promise<USERS | null> {
    return this.prisma.uSERS.findUnique({
      where: {email},
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
    return this.prisma.uSERS.create({
      data,
    });
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