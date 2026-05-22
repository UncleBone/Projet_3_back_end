import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { Transform, Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  readonly email: string;

  @IsString()
  @MinLength(3)
  readonly password: string;
}

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;
}
