import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}
  async signUp(user: CreateUserDto): Promise<UserEntity> {
    if (user.password != user.confirm_password) {
      throw new UnprocessableEntityException('passwords do not match');
    }
    return await this.createUser(user);
  }

  async createUser(userBody: CreateUserDto): Promise<UserEntity> {
    return new Promise(async (resolve) => {
      const { email, name, password, phone, address, profile_pic } = userBody;
      const user = this.userRepository.create();
      user.profile_pic = profile_pic
        ? profile_pic
        : 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'; // TODO: arrumar posteriormente com valor default na entidade
      user.email = email;
      user.phone = phone;
      user.name = name;
      user.address = address; // TODO: arrumar posteriormente tipagem
      user.salt = await bcrypt.genSalt(12);
      user.confirmationToken = '';
      user.recoverToken = '';
      user.password = await this.hashPassword(password, user.salt);
      const userCreated = await this.userRepository.save(user);
      delete userCreated.password;
      delete user.salt;
      resolve(user);
    });
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
