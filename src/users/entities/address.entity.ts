import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  zip_code: string;

  @Column({ length: 50, nullable: false })
  public_place: string;

  @Column({ length: 50, nullable: false })
  number: string;

  @Column({ length: 50, nullable: false })
  neighborhood: string;

  @Column({ length: 50, nullable: false })
  city: string;

  @Column({ length: 50, nullable: false })
  state: string;

  @Column({ length: 50, nullable: true })
  complement: string;

  @OneToOne(() => UserEntity, (user) => user.address)
  user: UserEntity;
}
