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
import { Game } from '../../game/entities/game.entity';
import { Monster } from '../../monster/entities/monster.entity';
import { Item } from '../../item/entities/item.entity';

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
    nullable: true,
    unique: false,
    default: "You think : 'Why does this only happen to me?!'",
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  // --------------RELATIONS
  @ManyToOne(() => Game, (game_id) => game_id.characters_id, { cascade: false })
  game_id: string;

  @OneToOne(() => Monster, { cascade: true })
  @JoinColumn()
  monster_id: string;

  // Hero is the join table between Item and Character
  // Hero has no property by itself except it's id
  @ManyToMany(() => Item, { cascade: false })
  @JoinTable({ name: 'hero' })
  items_id: string[];
}
