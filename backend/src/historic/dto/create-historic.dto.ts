import { Min, IsNumber, IsPositive } from 'class-validator';
export class CreateHistoricDto {
  @IsNumber()
  @Min(0)
  @IsPositive()
  nb_killed: number;
}
