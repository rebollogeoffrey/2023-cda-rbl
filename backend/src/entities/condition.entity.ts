import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Achievement } from './achievement.entity';

@Entity()
export class Condition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: false,
  })
  verb: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: false,
  })
  counter: number;

  @Column({
    type: 'varchar',
    length: 80,
    unique: false,
    nullable: true,
  })
  category: string;

  @ManyToOne(() => Achievement, (achievement) => achievement.conditions, {
    cascade: true,
  })
  achievement: Achievement;
}
