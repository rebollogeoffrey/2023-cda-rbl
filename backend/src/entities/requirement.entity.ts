import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Achievement } from './achievement.entity';

@Entity()
export class Requirement {
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

  // --------------RELATIONS
  @OneToOne(
    () => Achievement,
    (achievement_id) => achievement_id.requirement_id,
    { cascade: true },
  )
  achievement_id: string;
}
