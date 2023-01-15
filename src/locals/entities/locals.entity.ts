import { UsersDeviceEntity } from '../../users/entities/users_device.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
export enum description {
  casa = 'Casa',
  Escritório = 'Escritório',
  Fábrica = 'Fábrica',
}

@Entity({ name: 'locals' })
export class localsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  description: string;

  @OneToMany(() => UsersDeviceEntity, (devices) => devices.local, {})
  users_devices: UsersDeviceEntity;
}
