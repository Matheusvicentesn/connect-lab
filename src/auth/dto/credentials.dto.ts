import { IsEmail, IsString, Matches } from 'class-validator';

export class CredentialsDTO {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'Password must contain at least 8 characters, containing 1 uppercase letter. 1 lowercase letter, 1 number, and 1 special character / example: @Example123',
  })
  readonly password: string;
}
