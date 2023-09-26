// Base
import mockConfig from '../config/mock.config';

// Entity
import { User } from '../user/entities/user.entity';
import { Achievement } from '../achievement/entities/achievement.entity';
import { Effect } from '../effect/entities/effect.entity';
import { Requirement } from '../requirement/entities/requirement.entity';
import { Game } from '../game/entities/game.entity';
import { Item } from '../item/entities/item.entity';
import { Character } from '../character/entities/character.entity';
import { Monster } from '../monster/entities/monster.entity';
import { Category } from '../category/entities/category.entity';
import { Historic } from '../historic/entities/historic.entity';
import { Statistic } from '../statistic/entities/statistic.entity';

// Data
import { valuesUser } from './user';
import { valuesAchievement } from './achievement';
import { valuesEffect } from './effect';
import { valuesRequirement } from './requirement';
import { valuesGame } from './game';
import { valuesItem } from './item';
import { valuesCharacter } from './character';
import { valuesMonster } from './monster';
import { valuesCategory } from './category';
import { valuesHistoric } from './historic';
import { valuesStatistic } from './statistic';

export class MockData1694681037113 {
  public async up(): Promise<void> {
    const dataArray = [
      { table: User, value: valuesUser },
      { table: Achievement, value: valuesAchievement },
      { table: Effect, value: valuesEffect },
      { table: Requirement, value: valuesRequirement },
      { table: Game, value: valuesGame },
      { table: Item, value: valuesItem },
      { table: Character, value: valuesCharacter },
      { table: Monster, value: valuesMonster },
      { table: Category, value: valuesCategory },
      { table: Historic, value: valuesHistoric },
      { table: Statistic, value: valuesStatistic },
    ];

    dataArray.map(async (data) => {
      await mockConfig
        .createQueryBuilder()
        .insert()
        .into(data.table)
        .values(data.value)
        .execute();
    });
  }
}
