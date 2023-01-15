/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CredentialsDTO } from 'src/auth/dto/credentials.dto';
import { updatePasswordDTO } from 'src/auth/dto/update-password.dto';
import { updateUserDTO } from 'src/auth/dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUsersDeviceDto } from './dto/create-users_device.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post('/signin')
  async singIn(@Body() credentials: CredentialsDTO) {
    try {
      return await this.authService.signIn(credentials);
    } catch (error) {
      if ((error = 'data invalid')) {
        throw new UnauthorizedException('invalid login data');
      }
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    try {
      await this.authService.signUp(createUserDto);
      return {
        message: 'user created successfully',
      };
    } catch (error) {
      if (error.code == 23505)
        throw new HttpException(
          { reason: 'email already exists in the database' },
          HttpStatus.CONFLICT,
        );
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('/updatepassword')
  async updatePassword(
    @Body() updatePasswordDTO: updatePasswordDTO,
    @Request() payload,
  ) {
    try {
      await this.authService.updatePassword(updatePasswordDTO, payload.user);
      return {
        message: 'updated password',
      };
    } catch (error) {
      if ((error = 'data invalid')) {
        throw new UnauthorizedException('email or password invalid');
      }
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/linkdevice')
  async createDeviceForUser(
    @Body() createDevice: CreateUsersDeviceDto,
    @Request() payload,
  ) {
    try {
      await this.usersService.createDeviceForUser(createDevice, payload.user);
      return {
        message: 'successfully linked device',
      };
    } catch (error) {
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('searchdevices')
  async searchDevices(@Request() payload, @Query('local') query) {
    try {
      return await this.usersService.findUserDevices(payload.user, query);
    } catch (error) {
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('userDeviceInfo/:id')
  async userDeviceInfo(@Request() payload, @Param('id') id: string) {
    try {
      return await this.usersService.userDeviceInfo(payload.user, +id);
    } catch (error) {
      console.log(error);
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('userinfo')
  async userInfo(@Request() payload) {
    try {
      return await this.usersService.findUser(payload.user);
    } catch (error) {
      console.log(error);
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('switchdevice/:id')
  async updateUserState(@Request() payload, @Param('id') id: string) {
    try {
      return await this.usersService.updateUserState(payload.user, +id);
    } catch (error) {
      console.log(error);
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('/updateUser')
  async updateUser(@Body() updateUserDTO: updateUserDTO, @Request() payload) {
    try {
      await this.authService.updateUser(updateUserDTO, payload.user);
      return {
        message: 'user Updated',
      };
    } catch (error) {
      if (error == 'data invalid') {
        throw new UnauthorizedException('email or password 2invalid');
      }
      throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('deleteuserdevice/:id')
  async deleteUserDevice(@Param('id') id: string, @Request() payload) {
    try {
      await this.usersService.deleteUserDevice(+id, payload.user);
      return {
        message: 'device deleted',
      };
    } catch (error) {
      throw new HttpException(
        { reason: 'This device is not yours or not exists' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
