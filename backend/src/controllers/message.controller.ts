import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessageService } from 'src/services/message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({ description: 'Create new message' })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        rental_id: { type: 'number' },
        user_id: { type: 'number' },
        message: { type: 'string' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Wrong rental_id or user_id',
  })
  @ApiOkResponse({
    description: 'Message is sent',
    schema: {
      type: 'object',
      properties: { message: { type: 'string' } },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Post('messages')
  async createMessage(
    @Body() data: { rental_id: number; user_id: number; message: string },
    @Request() req,
  ) {
    data.user_id = req.user.userId;
    return this.messageService.createMessage(data);
  }
}
