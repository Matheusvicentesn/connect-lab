import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CredentialsDTO } from 'src/auth/dto/credentials.dto';
import { updatePasswordDTO } from 'src/auth/dto/update-password.dto';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersDeviceEntity } from './entities/users_device.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
    @Inject('USER_DEVICES_REPOSITORY')
    private user_device_repository: Repository<UsersDeviceEntity>,
    private authService: AuthService,
  ) {}

  // TODO: Fazer filter local via typeorm
  async findUserDevice(payload, local: string) {
    const user = await this.userRepository.findOne({
      where: [{ id: payload.id }],
      relations: {
        devices: {
          device: { info: true },
        },
      },
    });
    const userDevices = user.devices;
    const filterLocal = userDevices.filter((filter) => filter.local === local);
    const filterDevices = local
      ? filterLocal.map((device) => {
          const devices = {
            name: device.device.name,
            type: device.device.type,
            madeBy: device.device.madeBy,
            isOn: device.is_on,
            info: device.device.info,
          };
          delete devices.info.id;
          return devices;
        })
      : userDevices.map((device) => {
          const devices = {
            name: device.device.name,
            type: device.device.type,
            madeBy: device.device.madeBy,
            isOn: device.is_on,
            info: device.device.info,
          };
          delete devices.info.id;
          return devices;
        });

    return filterDevices;
  }

  createDeviceForUser(createDevice, request): Promise<any> {
    return new Promise(async (resolve) => {
      const user: UserEntity = await this.userRepository.findOne({
        where: { id: request.id },
        relations: {
          devices: true,
        },
      });

      const dispositivo: DeviceEntity = await this.deviceRepository.findOne({
        where: { id: createDevice.device_id },
      });

      let devices = this.user_device_repository.create();

      devices = { ...createDevice, ...devices };

      devices.device = dispositivo;

      user.addDevices(devices);

      this.userRepository.save(user);

      resolve(devices);
    });
  }

  async updatePassword(updatePasswordDTO: updatePasswordDTO, payload) {
    return await this.authService.updatePassword(updatePasswordDTO, payload);
  }

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
