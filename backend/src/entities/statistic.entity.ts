import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  nb_win: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  nb_lose: number;

  @OneToOne(() => Game)
  @JoinColumn()
  game: Game;
}
