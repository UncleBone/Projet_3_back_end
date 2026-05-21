import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RENTALS, Prisma } from '../generated/prisma/client';

@Injectable()
export class RentalRepo {
  constructor(private prisma: PrismaService) {}

  async rental({ id }: { id: number }): Promise<RENTALS | null> {
    return this.prisma.rENTALS.findUnique({
      where: { id },
      relationLoadStrategy: 'join',
      include: {
        USERS: true,
      },
    });
  }

  async rentals(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RENTALSWhereUniqueInput;
    where?: Prisma.RENTALSWhereInput;
    orderBy?: Prisma.RENTALSOrderByWithRelationInput;
  }): Promise<RENTALS[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.rENTALS.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      relationLoadStrategy: 'join',
      include: {
        USERS: true,
      },
    });
  }

  async createRental(data: {
    name: string;
    surface: number;
    price: number;
    picture?: string;
    description: string;
    owner_id: number;
  }): Promise<RENTALS> {
    return this.prisma.rENTALS.create({
      data,
    });
  }

  async updateRental(params: {
    where: Prisma.RENTALSWhereUniqueInput;
    data: Prisma.RENTALSUpdateInput;
  }): Promise<RENTALS> {
    const { where, data } = params;
    return this.prisma.rENTALS.update({
      data,
      where,
    });
  }
}
