import {
  Controller,
  Post,
  Body,
  Request, UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessageService } from 'src/services/message.service';

@Controller()
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('api/messages')
  async createMessage(
    @Body() data: { rental_id: number, user_id: number, message: string },
    @Request() req) {
      data.user_id = req.user.userId;
    return this.messageService.createMessage(data);
  }
}
