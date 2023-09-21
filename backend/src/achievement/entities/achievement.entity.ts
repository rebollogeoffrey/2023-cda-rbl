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

  // --------------RELATIONS
  @OneToOne(
    () => Requirement,
    (requirement_id) => requirement_id.achievement_id,
    { cascade: true },
  )
  requirement_id: string;

  @OneToOne(() => Effect, (effet_id) => effet_id.achievement_id, {
    cascade: true,
  })
  effect_id: string;

  @ManyToOne(() => Game, (game_id) => game_id.achievements_id, {
    cascade: false,
  })
  game_id: string;

  @ManyToMany(() => User, {
    cascade: false,
  })
  @JoinTable({ name: 'user_achievement' })
  users_id: string[];
}
