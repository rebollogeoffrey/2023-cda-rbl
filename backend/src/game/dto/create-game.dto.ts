import { IsString, MaxLength } from 'class-validator';

export class CreateGameDto {
  @MaxLength(80)
  @IsString()
  name: string;

  @MaxLength(255)
  @IsString()
  description: string;
}
