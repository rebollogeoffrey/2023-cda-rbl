import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Achievement } from '../../achievement/entities/achievement.entity';
import { Category } from 'src/category/entities/category.entity';

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

  // --------------TIMESTAMPS
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  // --------------RELATIONS
  @OneToOne(
    () => Achievement,
    (achievement_id) => achievement_id.requirement_id,
    { cascade: true },
  )
  achievement_id: string;

  @ManyToOne(() => Category, (category_id) => category_id.requirements_id)
  category_id: string;
}
