import { IsString, Length, IsNumber, IsPositive } from 'class-validator';
export class CreateCharacterDto {
  @Length(1, 255)
  @IsString()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  readonly max_health: number;

  @IsNumber()
  @IsPositive()
  readonly strength: number;

  @IsNumber()
  @IsPositive()
  readonly dexterity: number;

  @IsNumber()
  @IsPositive()
  readonly dodge: number;

  @IsString()
  @Length(0, 255)
  readonly description: string;

  @Length(1, 255)
  @IsString()
  readonly url_image: string;
}
