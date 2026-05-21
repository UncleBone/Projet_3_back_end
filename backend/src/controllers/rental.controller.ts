import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RentalService } from '../services/rental.service';
import { RENTALS } from '../generated/prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller()
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @ApiOperation({ description: 'Get all rentals' })
  @ApiUnauthorizedResponse({
    description: 'Invalid or missing access token',
  })
  @ApiOkResponse({
    description: 'Return all rentals',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          surface: { type: 'number' },
          price: { type: 'number' },
          picture: { type: 'string' },
          description: { type: 'string' },
          owner_id: { type: 'number' },
          created_at: { type: 'string' },
          updated_at: { type: 'string' },
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/rentals')
  async getRentals(): Promise<Array<RENTALS>> {
    return this.rentalService.getAllRentals();
  }

  @ApiOperation({ description: 'Get rental by ID' })
  @ApiNotFoundResponse({
    description: 'Unknown rental ID',
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid or missing access token',
  })
  @ApiOkResponse({
    description: 'Return rental',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        surface: { type: 'number' },
        price: { type: 'number' },
        picture: { type: 'string' },
        description: { type: 'string' },
        owner_id: { type: 'number' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/rentals/:id')
  async getRental(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<RENTALS | null> {
    return this.rentalService.getRental({ id });
  }

  @ApiOperation({ description: 'Create a new rental' })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        surface: { type: 'number' },
        price: { type: 'number' },
        picture: { type: 'string' },
        description: { type: 'string' },
        owner_id: { type: 'number' },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Fields are missing',
  })
  @ApiCreatedResponse({
    description: 'New rental succesfully created.',
    schema: {
      type: 'object',
      properties: { message: { type: 'string' } },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Post('api/rentals')
  async createRental(
    @Body()
    rentalData: {
      name: string;
      surface: number;
      picture?: string;
      price: number;
      description: string;
      owner_id: number;
    },
    @Request() req,
  ) {
    rentalData.owner_id = req.user.userId;
    return this.rentalService.createRental(rentalData);
  }

  @ApiOperation({ description: 'Update rental' })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        surface: { type: 'number' },
        price: { type: 'number' },
        picture: { type: 'string' },
        description: { type: 'string' },
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Unknown rental ID',
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid or missing access token, or user is not rental owner',
  })
  @ApiOkResponse({
    description: 'Rental succesfully updated.',
    schema: {
      type: 'object',
      properties: { message: { type: 'string' } },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Put('api/rentals/:id')
  async updateRental(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    data: {
      name?: string;
      surface?: number;
      picture?: string;
      price?: number;
      description?: string;
    },
    @Request() req,
  ) {
    const userId = req.user.userId;
    return this.rentalService.updateRental(data, userId, id);
  }
}
