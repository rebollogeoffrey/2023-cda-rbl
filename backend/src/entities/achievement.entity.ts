import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Condition } from './condition.entity';
import { Effect } from './effect.entity';

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
    default: false,
  })
  is_owned: boolean;

  @OneToMany(() => Condition, (condition) => condition.achievement, {
    cascade: false,
  })
  conditions: Condition[];

  @OneToMany(() => Effect, (effect) => effect.achievement, {
    cascade: false,
  })
  effects: Effect[];
}
