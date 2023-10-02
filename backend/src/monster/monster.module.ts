import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from './entities/monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monster])],
  controllers: [MonsterController],
  providers: [MonsterService],
})
export class MonsterModule {}
