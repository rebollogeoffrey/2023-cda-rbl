import { Min, IsNumber } from 'class-validator';
export class CreateHistoricDto {
  @IsNumber()
  @Min(0)
  nb_killed: number;
}
