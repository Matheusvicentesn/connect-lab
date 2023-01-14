import {
  Body,
  Controller,
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { updatePasswordDTO } from 'src/auth/dto/update-password.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
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
  updatePassword(
    @Body() updatePasswordDTO: updatePasswordDTO,
    @Request() request,
  ) {
    return this.usersService.updatePassword(updatePasswordDTO, request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('linkdevice/:id')
  async createDeviceForUser(@Body() createDevice, @Request() request) {
    return await this.usersService.createDeviceForUser(
      createDevice,
      request.user,
    );
  }
  @UseGuards(JwtAuthGuard)
  @Get('searchdevices')
  async searchDevices(@Request() request, @Query('local') query) {
    return await this.usersService.findUserDevices(request.user, query);
  }

  @UseGuards(JwtAuthGuard)
  @Get('searchdevice/:id')
  async searchDevice(@Request() request, @Param('id') id) {
    return await this.usersService.findUserDevice(request.user, +id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('userinfo')
  async userInfo(@Request() payload) {
    return await this.usersService.findUser(payload);
  }
}
