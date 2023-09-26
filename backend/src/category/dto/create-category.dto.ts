import { IsEnum } from 'class-validator';

import { category_name } from '../entities/category.entity';

export class CreateCategoryDto {
  @IsEnum(category_name)
  readonly role: category_name;
}
