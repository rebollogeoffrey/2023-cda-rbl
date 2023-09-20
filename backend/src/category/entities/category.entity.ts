import { Monster } from 'src/monster/entities/monster.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CategoryName {
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
  @OneToMany(() => Monster, (monsters_id) => monsters_id.category_id)
  monsters_id: [string];
}
