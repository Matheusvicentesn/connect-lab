import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.provider';
import { DevicesModule } from './devices/devices.module';
import { LocalsModule } from './locals/locals.module';

@Module({
  imports: [
    UsersModule,
    DevicesModule,
    LocalsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [...databaseProviders],
})
export class AppModule {}
