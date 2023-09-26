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
import { Item } from 'src/item/entities/item.entity';
import { Category } from 'src/category/entities/category.entity';

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
  @OneToOne(() => Achievement, (achievement_id) => achievement_id.effect_id, {
    cascade: false,
  })
  achievement_id: string;

  @OneToMany(() => Item, (items_id) => items_id.effect_id)
  items_id: [string];

  @ManyToOne(() => Category, (category_id) => category_id.effects_id)
  category_id: string;
}
