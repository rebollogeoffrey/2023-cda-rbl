import { IsString, IsBoolean, MaxLength } from 'class-validator';
export class CreateAchievementDto {
  @MaxLength(255)
  @IsString()
  readonly title: string;

  @MaxLength(255)
  @IsString()
  readonly description: string;

  @MaxLength(255)
  @IsString()
  readonly url_image: string;

  @IsBoolean()
  readonly is_owned: boolean;
}
