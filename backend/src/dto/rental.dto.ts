import { IsString, IsNotEmpty, IsNumber, IsEmpty } from 'class-validator';
import { Transform, Exclude, Expose } from 'class-transformer';

export class FormRentalDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly surface: string; // because form data

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly price: string; // form data

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

export class CreateRentalDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNotEmpty()
  @IsNumber()
  surface: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  @IsEmpty()
  picture?: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  owner_id: number;
}
