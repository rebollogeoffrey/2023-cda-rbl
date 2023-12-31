import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Character } from '../../character/entities/character.entity';
import { Item } from '../../item/entities/item.entity';
import { Achievement } from '../../achievement/entities/achievement.entity';
import { Statistic } from '../../statistic/entities/statistic.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: true,
    unique: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
  })
  description: string;

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
  @OneToMany(() => Character, (characters_id) => characters_id.game_id, {
    cascade: true,
  })
  characters_id: string[];

  @OneToMany(() => Item, (items_id) => items_id.game_id, {
    cascade: true,
  })
  items_id: string[];

  @OneToMany(() => Achievement, (achievements_id) => achievements_id.game_id)
  achievements_id: string[];

  @OneToOne(() => Statistic)
  @JoinColumn()
  statistic_id: string;
}
