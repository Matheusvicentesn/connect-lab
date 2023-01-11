import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeviceEntity } from './device.entity';

@Entity({ name: 'info' })
export class InfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  virtual_id: string;

  @Column()
  ip_address: string;

  @Column()
  mac_address: string;

  @Column()
  signal: string;

  @OneToOne(() => DeviceEntity, (device) => device.info)
  device: DeviceEntity;
}
