import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';

export class updatePasswordDTO {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message:
      'New password must contain at least 8 characters, containing 1 uppercase letter. 1 lowercase letter, 1 number, and 1 special character / example: @Example123',
  })
  new_password: string;

  @IsString()
  @IsNotEmpty()
  @Match('new_password', { message: 'passwords do not match' })
  confirm_password: string;
}
