import { DeviceEntity } from 'src/devices/entities/device.entity';

import { DataSource } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { UserEntity } from './entities/user.entity';
import { UsersDeviceEntity } from './entities/users_device.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_DEVICES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersDeviceEntity),
    inject: ['DATA_SOURCE'],
  },
];
