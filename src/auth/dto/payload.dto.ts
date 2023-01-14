import { IsEmail, IsNumber, IsString } from 'class-validator';

export class payloadDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly profile_pic: string;

  @IsEmail()
  @IsString()
  readonly email: string;
}
