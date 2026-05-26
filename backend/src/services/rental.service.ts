import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { RENTALS } from '../generated/prisma/client';
import { RentalRepo } from 'src/repository/rental.repo';
import { CreateRentalDto, FormRentalDto, RentalOwnerDto } from 'src/dto/rental.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class RentalService {
  constructor(private repo: RentalRepo) {}

  async findRental({ id }: { id: number }): Promise<RENTALS | null> {
    return this.repo.rental({ id });
  }

  async getRental({ id }: { id: number }) {
    let rental = await this.findRental({ id });
    if (rental === null) {
      throw new NotFoundException();
    }
    rental["owner"] = plainToInstance(RentalOwnerDto, rental["USERS"], { excludeExtraneousValues: true });
    delete rental["USERS"];
    
    return rental
  }

  async getAllRentals() {
    const allRentals = await this.repo.rentals({});
    allRentals.forEach(
      function (rental) {
        rental["owner"] = plainToInstance(RentalOwnerDto, rental["USERS"], { excludeExtraneousValues: true });
        delete rental["USERS"];
      });
    return { "rentals": allRentals };
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
    data: Partial<CreateRentalDto>,
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

    this.repo.updateRental({ where: { id: rentalId }, data: data });
    return { message: 'Rental updated !' };
  }
}
