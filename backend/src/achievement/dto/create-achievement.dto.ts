import { IsString, IsBoolean, Length } from 'class-validator';
export class CreateAchievementDto {
  @Length(10, 255)
  @IsString()
  readonly title: string;

  @Length(10, 255)
  @IsString()
  readonly description: string;

  @Length(10, 255)
  @IsString()
  readonly url_image: string;

  @IsBoolean()
  readonly is_owned: boolean;
}
