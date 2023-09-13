import { User } from '../entities/user.entity';

import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param() params) {
    return this.userService.getUserById(params.id);
  }

  @Post()
  saveUser(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @Put()
  updateUser(
    @Body()
    userBody: User,
  ) {
    return this.userService.saveUser(userBody);
  }

  @Delete()
  deleteUser(@Body() user: User) {
    return this.userService.deleteUser(user);
  }
}
