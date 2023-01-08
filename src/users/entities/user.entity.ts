import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressEntity } from './address.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({
    nullable: true,
  })
  profile_pic: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ type: 'varchar', length: 64 })
  confirmationToken: string;

  @Column({ type: 'varchar', length: 64 })
  recoverToken: string;

  @Column({ length: 50, nullable: true })
  phone: string;

  @JoinColumn()
  @OneToOne(() => AddressEntity, (address) => address.user, { cascade: true })
  address: AddressEntity;
}
