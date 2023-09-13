//Base
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

// Service
import { UserService } from './user.service';

// Entity
import { User } from '../entities/user.entity';

// Guard
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getUserById(@Param() params) {
    return this.userService.getUserById(params.id);
  }

  @Post()
  saveUser(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  updateUser(
    @Body()
    userBody: User,
  ) {
    return this.userService.saveUser(userBody);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  deleteUser(@Body() user: User) {
    return this.userService.deleteUser(user);
  }
}
