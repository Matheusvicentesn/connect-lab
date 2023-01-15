import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CredentialsDTO } from './dto/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { updatePasswordDTO } from './dto/update-password.dto';
import { splitUserName } from 'src/utils/splitUserName';
import { payloadDTO } from './dto/payload.dto';
import { updateUserDTO } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async updatePassword(
    updatePasswordDTO: updatePasswordDTO,
    payload: payloadDTO,
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
        });

        const credentials: CredentialsDTO = {
          email: updatePasswordDTO.email,
          password: updatePasswordDTO.password,
        };

        const checkUser = await this.checkCredentials(credentials);

        if (checkUser === null) {
          reject('data invalid');
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
        resolve(saveUserUpdate);
      } catch (error) {
        reject(error);
      }
    });
  }

  async updateUser(updateUserDTO: updateUserDTO, payload: payloadDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
          relations: { address: true },
        });

        const credentials: CredentialsDTO = {
          email: updateUserDTO.email,
          password: updateUserDTO.password,
        };

        const checkUser = await this.checkCredentials(credentials);

        if (checkUser == null) {
          reject('data invalid');
        }
        const userUpdate = this.userRepository.create(user);
        userUpdate.name = updateUserDTO.name;
        // user.email = updateUserDTO.email;
        userUpdate.profile_pic = updateUserDTO.profile_pic;
        userUpdate.phone = updateUserDTO.phone;
        userUpdate.address.zip_code = updateUserDTO.address.zip_code;
        userUpdate.address.street = updateUserDTO.address.street;
        userUpdate.address.city = updateUserDTO.address.city;
        userUpdate.address.neighborhood = updateUserDTO.address.neighborhood;
        userUpdate.address.state = updateUserDTO.address.state;
        userUpdate.address.complement = updateUserDTO.address.complement;
        userUpdate.address.number = updateUserDTO.address.number;
        userUpdate.salt = await bcrypt.genSalt(12);
        userUpdate.password = await this.hashPassword(
          updateUserDTO.newpassword,
          userUpdate.salt,
        );

        const saveUserUpdate = await this.userRepository.save(userUpdate);
        delete saveUserUpdate.password;
        delete saveUserUpdate.salt;
        resolve(saveUserUpdate);
      } catch (error) {
        reject(error);
      }
    });
  }

  async signIn(credentials: CredentialsDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.checkCredentials(credentials);
        if (user === null) {
          reject('data invalid');
        }

        const firstName = splitUserName(user.name);
        user.name = firstName;

        const jwtPayload = {
          id: user.id,
          name: user.name,
          pic: user.profile_pic,
          email: user.email,
        };
        const token = this.jwtService.sign(jwtPayload);
        resolve({ token, user });
      } catch (error) {
        error;
      }
    });
  }

  async checkCredentials(credentials: CredentialsDTO) {
    const { email, password } = credentials;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
      relations: {
        address: true,
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
        reject(error);
      }
    });
  }

  async createUser(userBody: CreateUserDto): Promise<UserEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { password } = userBody;
        const user = this.userRepository.create(userBody);
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
