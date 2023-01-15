import { DataSource } from 'typeorm';
import { localsEntity } from './entities/locals.entity';

export const localsProviders = [
  {
    provide: 'LOCALS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(localsEntity),
    inject: ['DATA_SOURCE'],
  },
];
