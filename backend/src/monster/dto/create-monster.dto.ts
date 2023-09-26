import { IsNumber, IsPositive, Min } from 'class-validator';

export class CreateMonsterDto {
  @IsNumber()
  @Min(1)
  @IsPositive()
  difficulty: number;
}
