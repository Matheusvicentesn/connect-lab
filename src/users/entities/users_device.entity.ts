import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../entities/user.entity';
import { DeviceEntity } from '../../devices/entities/device.entity';
import { localsEntity } from '../../locals/entities/locals.entity';

@Entity({ name: 'users_devices' })
export class UsersDeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.devices, {
    onDelete: 'SET NULL',
  })
  user: UserEntity;

  @JoinColumn({ name: 'device_id' })
  @ManyToOne(() => DeviceEntity, (device) => device.users_devices, {
    cascade: true,
  })
  device: DeviceEntity;

  @JoinColumn({ name: 'local_id' })
  @ManyToOne(() => localsEntity, (locals) => locals.users_devices, {
    cascade: true,
  })
  local: localsEntity;

  @Column()
  is_on: boolean;

  @Column()
  room: string;
}
