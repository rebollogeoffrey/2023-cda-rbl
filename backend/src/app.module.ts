import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AchievementModule } from './achievement/achievement.module';
import { GameModule } from './game/game.module';
import { CharacterModule } from './character/character.module';
import { MonsterModule } from './monster/monster.module';
import { ItemModule } from './item/item.module';
import { EffectModule } from './effect/effect.module';
import { RequirementModule } from './requirement/requirement.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: false,
    }),
    UserModule,
    AchievementModule,
    GameModule,
    CharacterModule,
    MonsterModule,
    ItemModule,
    EffectModule,
    RequirementModule,
    StatisticModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
