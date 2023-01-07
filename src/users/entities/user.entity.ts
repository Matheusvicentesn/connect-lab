import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

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

  @Column({ length: 50, nullable: false })
  phone: string;
}
