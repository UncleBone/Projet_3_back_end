import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { RENTALS } from '../generated/prisma/client';
import { RentalRepo } from 'src/repository/rental.repo';
import { CreateRentalDto, FormRentalDto } from 'src/dto/rental.dto';

@Injectable()
export class RentalService {
  constructor(private repo: RentalRepo) {}

  async findRental({ id }: { id: number }): Promise<RENTALS | null> {
    return this.repo.rental({ id });
  }

  async getRental({ id }: { id: number }): Promise<RENTALS | null> {
    const rental = await this.findRental({ id });
    if (rental === null) {
      throw new NotFoundException();
    }
    return rental;
  }

  async getAllRentals(): Promise<Array<RENTALS>> {
    return this.repo.rentals({});
  }

  async createRental(data: CreateRentalDto) {
    if (
      !data ||
      !data.name ||
      !data.surface ||
      !data.description ||
      !data.price
    ) {
      throw new BadRequestException('Missing data');
    }

    this.repo.createRental(data);
    return { message: 'Rental created !' };
  }

  async updateRental(
    data: Partial<FormRentalDto>,
    userId: number,
    rentalId: number,
  ): Promise<{ message: string }> {
    const rental = await this.findRental({ id: rentalId });
    if (rental === null) {
      throw new NotFoundException();
    }
    if (userId !== rental['owner_id']) {
      throw new UnauthorizedException(
        'This rental can only be modified by its owner',
      );
    }
    let rentalData = {};
    for (var key in data) {
      if (key === "surface" || key === "description") {
        rentalData[key] = Number(data[key]);
      }else{
        rentalData[key] = data[key];
      }
    }
    this.repo.updateRental({ where: { id: rentalId }, data: rentalData });
    return { message: 'Rental updated !' };
  }
}
