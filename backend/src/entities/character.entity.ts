import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Character {
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
    nullable: true,
  })
  max_health: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  strength: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  dexterity: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  dodge: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  @ManyToOne(() => Game, (game) => game.characters)
  game: Game;
}
