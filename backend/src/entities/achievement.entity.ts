import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Effect } from './effect.entity';
import { Requirement } from './requirement.entity';

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
    default: false,
  })
  is_owned: boolean;

  @OneToMany(() => Requirement, (requirement) => requirement.achievement, {
    cascade: false,
  })
  requirements: Requirement[];

  @OneToMany(() => Effect, (effect) => effect.achievement, {
    cascade: false,
  })
  effects: Effect[];
}
