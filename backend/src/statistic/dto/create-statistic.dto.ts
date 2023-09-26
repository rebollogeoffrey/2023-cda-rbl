import { IsNumber, IsPositive, Min } from 'class-validator';

export class CreateStatisticDto {
  @IsNumber()
  @Min(0)
  @IsPositive()
  nb_win: number;

  @IsNumber()
  @Min(0)
  @IsPositive()
  nb_lose: number;
}
