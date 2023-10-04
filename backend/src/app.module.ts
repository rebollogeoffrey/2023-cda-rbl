// Base
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Config
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

// Actual Module
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AchievementModule } from './achievement/achievement.module';
import { GameModule } from './game/game.module';
import { CharacterModule } from './character/character.module';
import { MonsterModule } from './monster/monster.module';
import { ItemModule } from './item/item.module';
import { EffectModule } from './effect/effect.module';
import { RequirementModule } from './requirement/requirement.module';
import { StatisticModule } from './statistic/statistic.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    AuthModule,
    UserModule,
    AchievementModule,
    GameModule,
    CharacterModule,
    MonsterModule,
    ItemModule,
    EffectModule,
    RequirementModule,
    StatisticModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
