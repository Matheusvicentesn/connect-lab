import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
