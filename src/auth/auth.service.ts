import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CredentialsDTO } from './dto/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { updatePasswordDTO } from './dto/update-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}
  async updatePassword(updatePasswordDTO: updatePasswordDTO, payload) {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id: payload.id },
    });

    // TODO: IMPLEMENTAÇÃO FALHA VERIFICAR POSTERIORMENTE
    const credentials: CredentialsDTO = await {
      email: updatePasswordDTO.email,
      password: updatePasswordDTO.password,
    };

    const checkUser = await this.checkCredentials(credentials);

    if (checkUser === null) {
      throw new UnauthorizedException('invalid log2in data');
    }

    if (user.email != updatePasswordDTO.email) {
      return 'Email inválido';
    }
    const checkpass = await user.checkPassword(updatePasswordDTO.password);
    if (!checkpass) {
      return 'Senha incorreta';
    }
    user.salt = await bcrypt.genSalt(12);
    user.password = await this.hashPassword(
      updatePasswordDTO.new_password,
      user.salt,
    );
    const userUpdate = this.userRepository.create(user);
    const saveUserUpdate = await this.userRepository.save(userUpdate);
    delete saveUserUpdate.password;
    delete saveUserUpdate.salt;
    return saveUserUpdate;
  }

  async signIn(credentials: CredentialsDTO) {
    const user = await this.checkCredentials(credentials);
    console.log(user);
    if (user === null) {
      throw new UnauthorizedException('invalid login data');
    }

    const jwtPayload = {
      id: user.id,
      name: user.name,
      pic: user.profile_pic,
      email: user.email,
    };
    const token = await this.jwtService.sign(jwtPayload);
    return { token };
  }

  async checkCredentials(credentials: CredentialsDTO) {
    const { email, password } = credentials;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (user && (await user.checkPassword(password))) {
      return user;
    }
    return null;
  }

  async signUp(user: CreateUserDto): Promise<UserEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const userReturn = await this.createUser(user);
        resolve(userReturn);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  async createUser(userBody: CreateUserDto): Promise<UserEntity> {
    return new Promise(async (resolve, reject) => {
      try {
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
      } catch (error) {
        reject(error);
      }
    });
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
