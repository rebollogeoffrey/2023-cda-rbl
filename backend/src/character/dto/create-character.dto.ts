import { IsString, Length, Min, Max, IsNumber } from 'class-validator';
export class CreateCharacterDto {
  @Length(10, 255)
  @IsString()
  readonly name: string;

  @Length(10, 255)
  @IsString()
  readonly max_health: number;

  @Min(60)
  @IsNumber()
  @Max(100)
  readonly strength: number;

  @Min(60)
  @IsNumber()
  @Max(100)
  readonly dexterity: number;

  @Min(60)
  @IsNumber()
  @Max(100)
  readonly dodge: number;

  @Length(10, 255)
  @IsString()
  readonly url_image: string;
}
