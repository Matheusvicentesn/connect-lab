import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';

export enum description {
  casa = 'casa',
  Escritório = 'escritório',
  Fábrica = 'fábrica',
}

export class CreateUsersDeviceDto {
  @IsNumber()
  device_id: any;
  @IsEnum(description, {
    message: 'predefined locales allowed: casa, escritório, fábrica ',
  })
  local: description;
  @IsBoolean()
  is_on: boolean;
  @IsString()
  room: string;
}
