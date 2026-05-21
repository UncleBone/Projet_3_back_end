import { Injectable, BadRequestException } from '@nestjs/common';
import { MessageRepo } from 'src/repository/message.repo';
import { RentalService } from './rental.service';

@Injectable()
export class MessageService {
  constructor(
    private repo: MessageRepo,
    private rentalService: RentalService,
  ) {}

  async createMessage(data: {
    user_id: number;
    rental_id: number;
    message: string;
  }) {
    if (!data || !data.user_id || !data.rental_id || !data.message) {
      throw new BadRequestException('Missing data');
    }
    if (
      typeof data.user_id !== 'number' ||
      typeof data.rental_id !== 'number'
    ) {
      throw new BadRequestException('Wrong type');
    }
    const rental = await this.rentalService.findRental({ id: data.rental_id });
    if (rental === null) {
      throw new BadRequestException('Unknown rental_id');
    }
    this.repo.createMessage(data);
    return { message: 'Message sent !' };
  }
}
