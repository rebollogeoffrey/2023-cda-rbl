import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Game } from './game.entity';
import { Monster } from './monster.entity';
import { Item } from './item.entity';

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

  @ManyToOne(() => Game, (game) => game.characters, {
    cascade: false,
  })
  game: Game;

  @OneToOne(() => Monster, {
    cascade: true,
  })
  @JoinColumn()
  monster: Monster;

  // Hero is the join table between Item and Character
  // Hero has no property by itself except it's id
  @ManyToMany(() => Item, {
    cascade: false,
  })
  @JoinTable({ name: 'Hero' })
  items: Item[];
}