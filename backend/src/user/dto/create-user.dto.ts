import {
  IsEmail,
  IsNotEmpty,
  Length,
  IsStrongPassword,
  IsString,
  IsEnum,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsEnum(UserRole)
  readonly role: UserRole;

  @Length(1, 80)
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(10, 255)
  readonly email: string;

  @IsNotEmpty()
  @Length(5, 255)
  @IsStrongPassword({
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  readonly password: string;

  @IsString()
  readonly url_image: string;
}
