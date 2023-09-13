import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monster {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;
}
