import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from './address-dto';
import { Type } from 'class-transformer';
import { Match } from 'src/core/constraints/match.decorator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  readonly name: string;

  @IsEmail(undefined)
  readonly email: string;

  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Password must contain at least 8 characters, containing 1 uppercase letter. 1 lowercase letter, 1 number, and 1 special character / example: @Example123',
  })
  readonly password: string;

  @IsString()
  @Match('password')
  readonly confirm_password: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @IsOptional()
  readonly phone: string;

  @ValidateNested()
  @Type(() => AddressDTO)
  address: any; // TODO: arrumar posteriormente tipagem
}
