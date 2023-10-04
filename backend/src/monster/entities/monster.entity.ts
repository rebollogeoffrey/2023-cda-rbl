import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Character } from '../../character/entities/character.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Monster {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: false,
    default: 1,
  })
  difficulty: number;

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
  @OneToOne(() => Character, { cascade: true })
  @JoinColumn()
  character: string;

  @ManyToOne(() => Category, (category) => category.monsters)
  category: string;
}
