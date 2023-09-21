import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Effect } from 'src/effect/entities/effect.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
    unique: false,
  })
  name: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: false,
    default: 0,
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  effect: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

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
  @ManyToOne(() => Game, (game_id) => game_id.items_id, {
    cascade: false,
  })
  game_id: string;

  @ManyToOne(() => Effect, (effect_id) => effect_id.items_id)
  effect_id: string;

  // Relation ManyToMany with Character is in entity Character
}
