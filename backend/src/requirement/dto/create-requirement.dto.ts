import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateRequirementDto {
  @IsString()
  @Length(1, 50)
  verb: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  counter: number;

  @IsString()
  @MaxLength(80)
  category: string;
}
