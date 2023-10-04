// Base
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Actual Module
import { UserService } from './user.service';
import { UserController } from './user.controller';

// Entity
import { User } from './entities/user.entity';

@Module({
  imports: [UserService, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
