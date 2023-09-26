import { Min, IsBoolean, IsEnum, IsNumber, IsPositive } from 'class-validator';
import { statistic_affected } from '../entities/effect.entity';
export class CreateEffectDto {
  @IsBoolean()
  readonly is_on_hero: boolean;

  @IsEnum(statistic_affected)
  readonly stat_affected: statistic_affected;

  @IsNumber()
  @Min(1)
  @IsPositive()
  readonly value: number;
}
