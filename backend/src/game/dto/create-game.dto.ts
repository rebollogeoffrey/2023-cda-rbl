import { IsString, Length } from 'class-validator';

export class CreateGameDto {
  @Length(2, 80)
  @IsString()
  name: string;

  @Length(10, 255)
  @IsString()
  description: string;
}
