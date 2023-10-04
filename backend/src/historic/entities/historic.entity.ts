import { Category } from 'src/category/entities/category.entity';
import { Statistic } from 'src/statistic/entities/statistic.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Historic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    unique: false,
    default: 0,
  })
  nb_killed: number;

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

  @ManyToOne(() => Statistic, (statistic_id) => statistic_id.historics_id)
  statistic_id: string;

  @ManyToOne(() => Category, (category_id) => category_id.historics_id)
  category_id: string;
}
