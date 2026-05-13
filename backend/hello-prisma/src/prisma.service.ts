import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

@Injectable()

export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      user: "root",
      password: "root",
      host: "localhost",
      database: "chatop_db",
      port: 3306,
      connectionLimit: 5,
    });
    super({ adapter });
  }
}