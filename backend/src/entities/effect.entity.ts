import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Achievement } from './achievement.entity';

export enum statistic_affected {
  GOLD = 'gold',
  HEALTH_MAX = 'health_max',
  STRENGTH = 'strength',
  DEXTERITY = 'dexterity',
  DODGE = 'dodge',
}

@Entity()
export class Effect {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  is_on_hero: boolean;

  @Column({
    type: 'enum',
    enum: statistic_affected,
    default: statistic_affected.GOLD,
  })
  stat_affected: statistic_affected;

  @Column({
    type: 'int',
    nullable: false,
  })
  value: number;

  // TODO : Replace string by enum in when column
  @Column({
    type: 'varchar',
    length: 50,
    unique: false,
    nullable: false,
  })
  when: string;

  // --------------RELATIONS
  @OneToOne(() => Achievement, (achievement_id) => achievement_id.effect_id, {
    cascade: false,
  })
  achievement_id: string;
}
