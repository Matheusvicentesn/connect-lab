import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../entities/user.entity';
import { DeviceEntity } from '../../devices/entities/device.entity';

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

  @Column()
  local: string;

  @Column()
  is_on: boolean;

  @Column()
  room: string;
}
