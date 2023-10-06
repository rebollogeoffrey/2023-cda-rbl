// Base
import mockConfig from '../config/mock.config';

// Entity
// import { User } from '../user/entities/user.entity';
// import { Achievement } from '../achievement/entities/achievement.entity';
import { Effect } from '../effect/entities/effect.entity';
// import { Requirement } from '../requirement/entities/requirement.entity';
import { Game } from '../game/entities/game.entity';
import { Item } from '../item/entities/item.entity';
// import { Personnage } from '../personnage/entities/personnage.entity';
// import { Monster } from '../monster/entities/monster.entity';
import { Category } from '../category/entities/category.entity';
// import { Historic } from '../historic/entities/historic.entity';
// import { Statistic } from '../statistic/entities/statistic.entity';

// Data
// import { valuesUser } from './user';
// import { valuesAchievement } from './achievement';
import { valuesEffect } from './effect';
// import { valuesRequirement } from './requirement';
import { valuesGame } from './game';
import { valuesItem } from './item';
// import { valuesPersonnage } from './personnage';
// import { valuesMonster } from './monster';
import { valuesCategory } from './category';
// import { valuesHistoric } from './historic';
// import { valuesStatistic } from './statistic';

export class MockData1694681037120 {
  public async up(): Promise<void> {
    // const dataArray = [
    //   { table: User, value: valuesUser },
    //   { table: Game, value: valuesGame },
    //   { table: Monster, value: valuesMonster },
    //   { table: Statistic, value: valuesStatistic },
    //   { table: Category, value: valuesCategory },
    //   { table: Effect, value: valuesEffect },
    //   { table: Requirement, value: valuesRequirement },
    //   { table: Achievement, value: valuesAchievement },
    //   { table: Item, value: valuesItem },
    //   { table: Personnage, value: valuesPersonnage },
    //   { table: Historic, value: valuesHistoric },
    // ];

    // await dataArray.map((data) => {
    //   return mockConfig
    //     .createQueryBuilder()
    //     .insert()
    //     .into(data.table)
    //     .values(data.value)
    //     .execute();
    // });

    await mockConfig
      .createQueryBuilder()
      .insert()
      .into(Game)
      .values(valuesGame)
      .execute();

    await mockConfig
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values(valuesCategory)
      .execute();

    await mockConfig
      .createQueryBuilder()
      .insert()
      .into(Effect)
      .values(valuesEffect)
      .execute();

    // await mockConfig
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Item)
    //   .values(valuesItem)
    //   .execute();
  }

  public async test(queryRunner) {
    await queryRunner.query(
      `INSERT INTO \`category\` (\`id\`,\`role\`,\`created_at\`,\`updated_at\`) VALUES ('7547fd73-8535-4eb2-b4b3-cd460c4d04d3','wolf',DEFAULT,DEFAULT)`,
    );
    await queryRunner.query(
      `INSERT INTO \`effect\` (\`id\`,\`is_on_hero\`,\`stat_affected\`,\`value\`,\`created_at\`,\`updated_at\`,\`categoryId\`) VALUES ('7b84374b-96db-4bd7-997b-e0208fae3b75',true,'strength',5,DEFAULT,DEFAULT,'7547fd73-8535-4eb2-b4b3-cd460c4d04d3')`,
    );
  }
}