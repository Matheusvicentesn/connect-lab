import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CredentialsDTO } from 'src/auth/dto/credentials.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    private authService: AuthService,
  ) {}

  async findAll() {
    return await this.userRepository.find({ relations: { address: true } });
  }

  async signIn(credentials: CredentialsDTO) {
    return await this.authService.signIn(credentials);
  }

  async signUp(user: CreateUserDto) {
    try {
      return await this.authService.signUp(user);
    } catch (error) {
      ('erro doido ');
    }
  }
}
