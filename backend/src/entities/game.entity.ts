import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

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
}
