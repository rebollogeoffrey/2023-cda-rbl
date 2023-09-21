// Base
import mockConfig from '../config/mock.config';

// Entity
import { User } from '../entities/user.entity';
import { Achievement } from '../entities/achievement.entity';
import { Effect } from '../entities/effect.entity';
import { Requirement } from '../entities/requirement.entity';
import { Game } from '../entities/game.entity';
import { Item } from '../entities/item.entity';
import { Character } from '../entities/character.entity';
import { Monster } from '../entities/monster.entity';

// Data
import { valuesUser } from './user';
import { valuesAchievement } from './achievement';
import { valuesEffect } from './effect';
import { valuesRequirement } from './requirement';
import { valuesGame } from './game';
import { valuesItem } from './item';
import { valuesCharacter } from './character';
import { valuesMonster } from './monster';
// import { valuesCategory } from './category';
// import { valuesHistoric } from './historic';
// import { valuesStatistic } from './statistic';

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
      // { table: Category, value: valuesCategory },
      // { table: Historic, value: valuesHistoric },
      // { table: Statitic, value: valuesStatistic },
    ];

    dataArray.map((data) => {
      return mockConfig
        .createQueryBuilder()
        .insert()
        .into(data.table)
        .values(data.value)
        .execute();
    });
    // // MockData for User
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(User)
    //   .values(valuesUser)
    //   .execute();

    // // MockData for Achievement
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Achievement)
    //   .values(valuesAchievement)
    //   .execute();

    // // MockData for Effect
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Effect)
    //   .values(valuesEffect)
    //   .execute();

    // // MockData for Requirement
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Requirement)
    //   .values(valuesRequirement)
    //   .execute();

    // // MockData for Game
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Game)
    //   .values(valuesGame)
    //   .execute();

    // // MockData for Item
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Item)
    //   .values(valuesItem)
    //   .execute();

    // // MockData for Character
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Character)
    //   .values(valuesCharacter)
    //   .execute();

    // // MockData for Monster
    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Monster)
    //   .values(valuesMonster)
    //   .execute();
  }
}
