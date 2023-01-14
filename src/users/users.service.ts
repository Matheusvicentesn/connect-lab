import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { Repository } from 'typeorm';
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

  async findUser(payload) {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id: payload.id },
      relations: { address: true },
    });
    delete user.address.id;
    if (user.phone === null) {
      return {
        pic: user.profile_pic,
        name: user.name,
        email: user.email,
        address: user.address,
      };
    } else {
      return {
        pic: user.profile_pic,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      };
    }
  }

  async findUserDevice(payload, id) {
    const userDevice = await this.user_device_repository.findOne({
      where: [{ id: id, user: payload.id }],
      relations: {
        device: {
          info: true,
        },
      },
    });
    return {
      name: userDevice.device.name,
      type: userDevice.device.type,
      madeBy: userDevice.device.madeBy,
      isOn: userDevice.is_on,
      info: userDevice.device.info,
    };
  }

  // TODO: Fazer filter local via typeorm
  async findUserDevices(payload, local: string) {
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
            id: device.id,
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
            id: device.id,
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

  createDeviceForUser(createDevice, payload): Promise<any> {
    return new Promise(async (resolve) => {
      const user: UserEntity = await this.userRepository.findOne({
        where: { id: payload.id },
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

  async findAll() {
    return await this.userRepository.find({ relations: { address: true } });
  }
}
