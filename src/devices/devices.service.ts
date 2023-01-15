import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
  ) {}

  async findAll() {
    const devices = await this.deviceRepository.find({
      relations: {
        info: true,
      },
    });
    const formatResponse = devices.map((device) => {
      const devices = {
        id: device.id,
        name: device.name,
        type: device.type,
        madeBy: device.madeBy,
        photoUrl: device.photoUrl,
        info: device.info,
      };
      delete devices.info.id;
      return devices;
    });
    return formatResponse;
  }
}
