import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { userProviders } from './users;provider';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [UsersController],
  providers: [
    AuthService,
    UsersService,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class UsersModule {}
