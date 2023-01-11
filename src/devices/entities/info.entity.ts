import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
