import {
  IsString,
  Length,
  Min,
  Max,
  IsBoolean,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { statistic_affected } from '../entities/effect.entity';
export class CreateEffectDto {
  @IsBoolean()
  readonly is_on_hero: boolean;

  @IsEnum(statistic_affected)
  readonly stat_affected: statistic_affected;

  @Min(5)
  @IsNumber()
  @Max(25)
  readonly value: number;

  @Length(10, 255)
  @IsString()
  readonly url_image: string;
}
