import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AppService, type Project } from './app.service';
import { RolesGuard } from './roles.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(RolesGuard)
  @Get("projects/:id")
  getProject(@Param("id", ParseIntPipe) id): Project {
    return this.appService.getProject(id)
  }
}
