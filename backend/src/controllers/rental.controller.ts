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
  UseInterceptors,
  UploadedFile,
  StreamableFile,
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
import { CreateRentalDto, FormRentalDto } from 'src/dto/rental.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import 'multer';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

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
      type: 'object',
      properties: {
        "rentals": {
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
              owner: { 
                type: 'object',
                properties: { id: { type: 'number' }, name: { type: 'string' } }
              }
            },
          }
        }
      }
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/rentals')
  async getRentals() {
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
        owner: { 
          type: 'object',
          properties: { id: { type: 'number' }, name: { type: 'string' } }
        }
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get('api/rentals/:id')
  async getRental(
    @Param('id', ParseIntPipe) id: number,
  ) {
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
  @UseInterceptors(FileInterceptor('picture', { dest: 'uploads/' }))
  async createRental(
    @Body()
      rentalData: FormRentalDto,
    @Request() req,
    @UploadedFile() picture: Express.Multer.File
  ) {
    let data: CreateRentalDto = {
      name: rentalData.name,
      description: rentalData.description,
      surface: Number(rentalData.surface),
      price: Number(rentalData.price),
      owner_id: req.user.userId
    }
    if(picture){
      data.picture = "http://localhost:3001/"+picture.path;
    }
    return this.rentalService.createRental(data);
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
    @Body() data: Partial<CreateRentalDto>,
    @Request() req,
  ) {
    const userId = req.user.userId;
    return this.rentalService.updateRental(data, userId, id);
  }

  @Get('uploads/:fileName')
  getImage(
    @Param('fileName') fileName: string
  ): StreamableFile {
    const file = createReadStream(join(process.cwd()+'/uploads/'+fileName));
    return new StreamableFile(file);
  }
}
