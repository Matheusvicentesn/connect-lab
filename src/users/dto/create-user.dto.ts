import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from './address-dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  readonly name: string;

  @IsEmail(undefined, { message: 'O e-mail informado não é válido' })
  readonly email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly password: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly confirm_password: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @IsOptional()
  readonly phone: string;

  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO;
}
