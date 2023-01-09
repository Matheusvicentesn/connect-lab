import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { userProviders } from './users;provider';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/dto/jwt.strategy';
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv-flow').config();
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 6,
      },
    }),
  ],
  controllers: [UsersController],
  providers: [
    JwtStrategy,
    AuthService,
    UsersService,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class UsersModule {}
