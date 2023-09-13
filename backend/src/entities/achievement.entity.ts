import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Condition } from './condition.entity';
import { Effet } from './effet.entity';

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  @Column({
    type: 'boolean',
    default: 'false',
    nullable: false,
    unique: false,
  })
  is_owned: boolean;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToMany(() => Condition, (condition) => condition.achievement)
  conditions: Achievement[];

  @OneToMany(() => Effet, (effet) => effet.achievement)
  effects: Effet[];
}
