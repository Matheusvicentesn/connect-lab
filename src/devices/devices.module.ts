import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.provider';
import { DevicesController } from './devices.controller';
import { DevicesProvider } from './devices.provider';
import { DevicesService } from './devices.service';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService, ...databaseProviders, ...DevicesProvider],
})
export class DevicesModule {}
