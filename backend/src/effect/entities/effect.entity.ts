import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Achievement } from '../../achievement/entities/achievement.entity';
import { Item } from '../../item/entities/item.entity';
import { Category } from '../../category/entities/category.entity';

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
  @OneToOne(() => Achievement, (achievement) => achievement.effect, {
    cascade: false,
  })
  achievement: string;

  @OneToMany(() => Item, (items) => items.effect)
  items: [string];

  @ManyToOne(() => Category, (category) => category.effects)
  category: string;
}
