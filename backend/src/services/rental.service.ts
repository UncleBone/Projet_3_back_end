import { Injectable, NotFoundException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { RENTALS } from '../generated/prisma/client';
import { RentalRepo } from 'src/repository/rental.repo';

@Injectable()
export class RentalService {
  constructor(
    private repo: RentalRepo,
  ) {}

  async findRental({ id }: { id: number }): Promise<RENTALS | null> {
    return this.repo.rental({ id });
  }

  async getRental({ id }: { id: number }): Promise<RENTALS | null> {
    const rental = await this.findRental({id});
    if(rental === null){
      throw new NotFoundException()
    }
    return rental
  }

  async getAllRentals(): Promise<Array<RENTALS>> {
    return this.repo.rentals({})
  }

  async createRental(data: { 
    name: string; 
    surface: number; 
    price: number, 
    picture?: string, 
    description: string, 
    owner_id: number 
  }) {
    if(!data || !data.name || !data.surface || !data.description || !data.price){
        throw new BadRequestException("Missing data")
    }

    this.repo.createRental(data);
    return { "message": "Rental created !" }
  }

  async updateRental(data: { 
      name?: string; 
      surface?: number; 
      picture?: string, 
      price?: number, 
      description?: string, 
    },userId: number,rentalId: number): Promise<{message: string}> {
    const rental = await this.findRental( { id: rentalId });
    if(rental === null){
      throw new NotFoundException();
    }
    if(userId !== rental["owner_id"]){
      throw new UnauthorizedException("This rental can only be modified by its owner");
    }
    this.repo.updateRental({ where: {id: rentalId}, data })
    return { message: "Rental updated !" }
  }
}