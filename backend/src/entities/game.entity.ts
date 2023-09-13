import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Character } from './character.entity';
import { Item } from './item.entity';

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

  @OneToMany(() => Character, (character) => character.game, {
    cascade: true,
  })
  characters: Character[];

  @OneToMany(() => Item, (item) => item.game, {
    cascade: false,
  })
  items: Item[];
}
