import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Character } from './character.entity';

@Entity()
export class Monster {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    unique: false,
    nullable: true,
  })
  category: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: false,
    default: 1,
  })
  difficulty: number;

  @OneToOne(() => Character)
  @JoinColumn()
  character: Character;
}
