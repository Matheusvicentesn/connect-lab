import { UsersDeviceEntity } from '../../users/entities/users_device.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InfoEntity } from './info.entity';

@Entity({ name: 'devices' })
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  type: string;

  @Column()
  madeBy: string;

  @Column()
  photoUrl: string;

  @JoinColumn()
  @OneToOne(() => InfoEntity, (info) => info.device, { cascade: true })
  info: InfoEntity;

  @OneToMany(() => UsersDeviceEntity, (devices) => devices.device, {})
  users_devices: UsersDeviceEntity;
}
