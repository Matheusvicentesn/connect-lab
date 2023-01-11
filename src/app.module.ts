import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.provider';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DevicesModule,
  ],
  controllers: [],
  providers: [...databaseProviders],
})
export class AppModule {}
