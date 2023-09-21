import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Effect } from '../../effect/entities/effect.entity';
import { Requirement } from '../../requirement/entities/requirement.entity';
import { Game } from '../../game/entities/game.entity';
import { User } from '../../user/entities/user.entity';

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

  // --------------RELATIONS
  @OneToOne(
    () => Requirement,
    (requirement) => requirement.achievement,
    { cascade: true },
  )
  requirement: string;

  @OneToOne(() => Effect, (effet) => effet.achievement, {
    cascade: true,
  })
  effect: string;

  @ManyToOne(() => Game, (game) => game.achievements, {
    cascade: false,
  })
  game: string;

  @ManyToMany(() => User, {
    cascade: false,
  })
  @JoinTable({ name: 'user_achievement' })
  users: string[];
}
