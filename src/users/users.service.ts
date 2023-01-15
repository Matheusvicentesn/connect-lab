import { Inject, Injectable } from '@nestjs/common';
import { payloadDTO } from 'src/auth/dto/payload.dto';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { localsEntity } from 'src/locals/entities/locals.entity';
import { Repository } from 'typeorm';
import {
  CreateUsersDeviceDto,
  description,
} from './dto/create-users_device.dto';
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
    @Inject('LOCALS_REPOSITORY')
    private localsRepository: Repository<localsEntity>,
  ) {}

  async deleteUserDevice(id: number, payload: payloadDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const userDevice = await this.user_device_repository.findOne({
          where: [{ id: id, user: { id: payload.id } }],
          relations: {
            device: {
              info: true,
            },
            user: true,
          },
        });
        if (userDevice.user.id !== payload.id) {
          reject(userDevice);
        }
        const device = await this.user_device_repository.delete({
          id: id,
          user: { id: payload.id },
        });
        console.log(device);

        resolve(device);
      } catch (error) {
        reject(error);
      }
    });
  }

  async updateUserState(payload: payloadDTO, id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const userDevice = await this.user_device_repository.findOne({
          where: [{ id: id, user: { id: payload.id } }],
          relations: {
            device: {
              info: true,
            },
            local: true,
          },
        });
        if (userDevice === null) {
          reject('not found device');
        }
        const deviceState = this.user_device_repository.create(userDevice);
        deviceState.is_on = !deviceState.is_on ? true : false;
        this.user_device_repository.save(deviceState);
        resolve({
          id: deviceState.id,
          user: payload.id,
          device: deviceState.device.id,
          local: deviceState.local.id,
          isOn: deviceState.is_on,
          room: deviceState.room,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async findUser(payload: payloadDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
          relations: { address: true },
        });
        delete user.address.id;
        if (user.phone === null) {
          resolve({
            pic: user.profile_pic,
            name: user.name,
            email: user.email,
            address: user.address,
          });
        } else {
          resolve({
            pic: user.profile_pic,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async userDeviceInfo(payload: payloadDTO, id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const userDevice = await this.user_device_repository.findOne({
          where: [{ id: id, user: { id: payload.id } }],
          relations: {
            device: {
              info: true,
            },
            user: true,
          },
        });
        if (userDevice === null) {
          reject('not found device');
        }
        resolve({
          name: userDevice.device.name,
          type: userDevice.device.type,
          madeBy: userDevice.device.madeBy,
          isOn: userDevice.is_on,
          info: userDevice.device.info,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async findUserDevices(payload: payloadDTO, local: description) {
    return new Promise(async (resolve) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: payload.id },
          relations: {
            devices: true,
          },
        });

        const userDevice = await this.user_device_repository.find({
          where: [{ local: { description: local }, user: { id: user.id } }],
          relations: {
            device: {
              info: true,
            },
            local: true,
          },
        });
        const formatResponse = userDevice.map((device) => {
          const devices = {
            id: device.id,
            name: device.device.name,
            type: device.device.type,
            photoUrl: device.device.photoUrl,
            local: device.local,
            room: device.room,
            madeBy: device.device.madeBy,
            isOn: device.is_on,
            info: device.device.info,
          };
          delete devices.info.id;
          delete devices.local.id;
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
        const stringLocal = createDevice.local.toLowerCase();

        const devices: DeviceEntity = await this.deviceRepository.findOne({
          where: { id: createDevice.device_id },
        });

        const locals: localsEntity = await this.localsRepository.findOne({
          where: { description: stringLocal },
        });

        let newDevice = this.user_device_repository.create();

        newDevice = { ...createDevice, ...newDevice };

        console.log(locals);
        newDevice.device = devices;
        newDevice.local = locals;

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
