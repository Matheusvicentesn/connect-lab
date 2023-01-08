import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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
}
