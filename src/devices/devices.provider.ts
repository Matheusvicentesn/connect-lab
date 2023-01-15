import { DataSource } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';

export const DevicesProvider = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
];
