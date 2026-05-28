import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      user: process.env['DATABASE_USER'],
      password: process.env['DATABASE_PASSWORD'],
      host: process.env['DATABASE_HOST'],
      database: process.env['DATABASE_DATABASE'],
      port: 3306,
      connectionLimit: 5,
      allowPublicKeyRetrieval: true,
    });
    super({ adapter });
  }
}
