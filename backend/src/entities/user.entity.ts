import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Achievement } from './achievement.entity';

export enum UserRole {
  ADMIN = 'admin',
  BASIC = 'basic',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.BASIC,
  })
  role: UserRole;

  @Column({
    type: 'varchar',
    length: 80,
    unique: false,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: '255',
    unique: false,
    nullable: true,
  })
  url_image: string;

  @ManyToMany(() => Achievement)
  @JoinTable({ name: 'user_achievement' })
  achievements: Achievement[];
}
