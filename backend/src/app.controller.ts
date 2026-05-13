import {
  Controller,
  Get,
  Param,
  ParseIntPipe
} from '@nestjs/common';
import { AppService, type Project } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("projects/:id")
  getProject(@Param("id", ParseIntPipe) id): Project {
    return this.appService.getProject(id)
  }
}
