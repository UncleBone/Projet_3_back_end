import {
  Controller,
  Get, Post, Put,
  Body, Param,
  ParseIntPipe,
  Request, UseGuards,
} from '@nestjs/common';
import { RentalService } from '../services/rental.service';
import { RENTALS } from '../generated/prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class RentalController {
  constructor(
    private readonly rentalService: RentalService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('api/rentals')
  async getRentals(): Promise<Array<RENTALS>> {
    return this.rentalService.getAllRentals()
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/rentals/:id')
  async getRental(@Param('id', ParseIntPipe) id: number): Promise<RENTALS | null> {
    return this.rentalService.getRental({ id })
  }

  @UseGuards(JwtAuthGuard)
  @Post('api/rentals')
  async createRental(
    @Body() rentalData: { name: string; surface: number; picture?: string, price: number, description: string, owner_id:number },
    @Request() req) {
      rentalData.owner_id = req.user.userId;
    return this.rentalService.createRental(rentalData);
  }

  @UseGuards(JwtAuthGuard)
  @Put('api/rentals/:id')
  async updateRental(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: { 
      name?: string; 
      surface?: number; 
      picture?: string, 
      price?: number, 
      description?: string, 
    },
    @Request() req) {
      const userId = req.user.userId;
    return this.rentalService.updateRental(data,userId,id);
  }
}
