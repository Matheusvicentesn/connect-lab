import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUsersDeviceDto {
  @IsNumber()
  device_id: any;
  @IsString()
  local: string;
  @IsBoolean()
  is_on: boolean;
  @IsString()
  room: string;
}
