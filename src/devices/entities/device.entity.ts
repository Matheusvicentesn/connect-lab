import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
