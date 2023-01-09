import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CredentialsDTO } from 'src/auth/dto/credentials.dto';
import { updatePasswordDTO } from 'src/auth/dto/update-password.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post('/signin')
  singIn(@Body() credentials: CredentialsDTO) {
    return this.usersService.signIn(credentials);
  }

  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.signUp(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/updatepassword')
  updatePassword(
    @Body() updatePasswordDTO: updatePasswordDTO,
    @Request() request,
  ) {
    return this.usersService.updatePassword(updatePasswordDTO, request.user);
  }
}
