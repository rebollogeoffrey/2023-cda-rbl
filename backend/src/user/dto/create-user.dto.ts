import {
  IsEmail,
  IsNotEmpty,
  Length,
  IsStrongPassword,
  IsString,
  IsEnum,
} from 'class-validator';
import { user_role } from '../entities/user.entity';

export class CreateUserDto {
  @IsEnum(user_role)
  readonly role: user_role;

  @IsString()
  @Length(1, 80)
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 255)
  readonly email: string;

  @IsStrongPassword({
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @Length(5, 255)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  readonly url_image: string;
}
