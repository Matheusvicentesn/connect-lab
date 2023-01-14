import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { payloadDTO } from 'src/auth/dto/payload.dto';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { Repository } from 'typeorm';
import { CreateUsersDeviceDto } from './dto/create-users_device.dto';
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

  async findUserDevices(payload: payloadDTO, local: string) {
    return new Promise(async (resolve) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
          relations: {
            devices: true,
          },
        });

        const userDevice = await this.user_device_repository.find({
          where: [{ local: local, user: { id: user.id } }],
          relations: {
            device: {
              info: true,
            },
          },
        });
        const formatResponse = userDevice.map((device) => {
          const devices = {
            id: device.device.id,
            name: device.device.name,
            type: device.device.type,
            madeBy: device.device.madeBy,
            isOn: device.is_on,
            info: device.device.info,
          };
          delete devices.info.id;
          return devices;
        });

        resolve(formatResponse);
      } catch (error) {
        error;
      }
    });
  }

  async createDeviceForUser(
    createDevice: CreateUsersDeviceDto,
    payload: payloadDTO,
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
          relations: {
            devices: true,
          },
        });

        const devices: DeviceEntity = await this.deviceRepository.findOne({
          where: { id: createDevice.device_id },
        });

        let newDevice = this.user_device_repository.create();

        newDevice = { ...createDevice, ...newDevice };

        newDevice.device = devices;

        user.addDevices(newDevice);

        this.userRepository.save(user);

        resolve(newDevice);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findAll() {
    return await this.userRepository.find({ relations: { address: true } });
  }
}
