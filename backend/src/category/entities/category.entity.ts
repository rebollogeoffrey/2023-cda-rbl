import { Effect } from '../../effect/entities/effect.entity';
import { Historic } from '../../historic/entities/historic.entity';
import { Monster } from '../../monster/entities/monster.entity';
import { Requirement } from '../../requirement/entities/requirement.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CategoryName {
  ALWAYS = 'always',
  ANIMATE = 'animate',
  BLOB = 'blob',
  DEAMON = 'daemon',
  DEXTERITY = 'dexterity',
  DODGE = 'dodge',
  ENVIRONMENT = 'environment',
  GOLD = 'gold',
  GOLEM = 'golem',
  HEALTH_MAX = 'health_max',
  MAGIC = 'magic',
  MERCHANT = 'merchant',
  PARTNER = 'partner',
  PLANT = 'plant',
  RUN = 'run',
  STRENGTH = 'strength',
  THIEF = 'thief',
  UNDEAD = 'undead',
  WOLF = 'wolf',
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: CategoryName,
  })
  role: CategoryName;

  // --------------TIMESTAMPS
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  // --------------RELATIONS
  @OneToMany(() => Monster, (monsters) => monsters.category)
  monsters: [string];

  @OneToMany(() => Effect, (effects) => effects.category)
  effects: [string];

  @OneToMany(() => Requirement, (requirements) => requirements.category)
  requirements: [string];

  @OneToMany(() => Historic, (historics) => historics.category)
  historics: [string];
}
