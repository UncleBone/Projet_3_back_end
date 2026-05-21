import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MESSAGES } from '../generated/prisma/client';

@Injectable()
export class MessageRepo {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: {
    user_id: number;
    rental_id: number;
    message: string;
  }): Promise<MESSAGES> {
    return this.prisma.mESSAGES.create({
      data,
    });
  }
}
