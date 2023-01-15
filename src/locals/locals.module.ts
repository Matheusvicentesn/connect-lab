import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.provider';
import { LocalsController } from './locals.controller';
import { localsProviders } from './locals.provider';
import { LocalsService } from './locals.service';

@Module({
  controllers: [LocalsController],
  providers: [LocalsService, ...databaseProviders, ...localsProviders],
})
export class LocalsModule {}
