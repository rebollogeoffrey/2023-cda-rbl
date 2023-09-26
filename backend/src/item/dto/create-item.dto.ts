import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @Length(1, 80)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsString()
  @MaxLength(255)
  readonly url_image: string;
}
