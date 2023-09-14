import { MigrationInterface, QueryRunner } from 'typeorm';

export class Testc1694681037113 implements MigrationInterface {
  name = 'Testc1694681037113';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`condition\` (\`id\` varchar(36) NOT NULL, \`verb\` varchar(50) NOT NULL, \`counter\` int NOT NULL, \`category\` varchar(80) NULL, \`achievementId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`effect\` (\`id\` varchar(36) NOT NULL, \`is_on_hero\` tinyint NOT NULL DEFAULT 0, \`stat_affected\` enum ('gold', 'health_max', 'strength', 'dexterity', 'dodge') NOT NULL DEFAULT 'gold', \`value\` int NOT NULL, \`when\` varchar(50) NOT NULL, \`achievementId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`achievement\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NULL, \`description\` varchar(255) NULL, \`url_image\` varchar(255) NULL, \`is_owned\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`price\` int NOT NULL, \`effect\` varchar(255) NULL, \`url_image\` varchar(255) NULL, \`gameId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NULL, \`description\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`monster\` (\`id\` varchar(36) NOT NULL, \`category\` varchar(80) NULL, \`difficulty\` int NOT NULL DEFAULT '1', \`characterId\` varchar(36) NULL, UNIQUE INDEX \`REL_87775a561720f861a7d03175ab\` (\`characterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`character\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`max_health\` int NULL, \`strength\` int NULL, \`dexterity\` int NULL, \`dodge\` int NULL, \`url_image\` varchar(255) NULL, \`gameId\` varchar(36) NULL, \`monsterId\` varchar(36) NULL, UNIQUE INDEX \`REL_982075c0920620c2c7b889082a\` (\`monsterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`statistic\` (\`id\` varchar(36) NOT NULL, \`nb_win\` int NOT NULL, \`nb_lose\` int NOT NULL, \`gameId\` varchar(36) NULL, UNIQUE INDEX \`REL_491821107b7d2025684aed48d6\` (\`gameId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`role\` enum ('admin', 'basic') NOT NULL DEFAULT 'basic', \`name\` varchar(80) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`url_image\` varchar(255) NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`Hero\` (\`characterId\` varchar(36) NOT NULL, \`itemId\` varchar(36) NOT NULL, INDEX \`IDX_e55693d1e875b82374c566656d\` (\`characterId\`), INDEX \`IDX_f4b52888f1506147eb3f57ad09\` (\`itemId\`), PRIMARY KEY (\`characterId\`, \`itemId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_achievement\` (\`userId\` varchar(36) NOT NULL, \`achievementId\` varchar(36) NOT NULL, INDEX \`IDX_2a418515c335cab7c5ba70c28b\` (\`userId\`), INDEX \`IDX_843ecd1965f1aac694875674a1\` (\`achievementId\`), PRIMARY KEY (\`userId\`, \`achievementId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`condition\` ADD CONSTRAINT \`FK_5ba0372106c819bade7ccaaae26\` FOREIGN KEY (\`achievementId\`) REFERENCES \`achievement\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` ADD CONSTRAINT \`FK_a51c214e5fe08f5122036ac6e2e\` FOREIGN KEY (\`achievementId\`) REFERENCES \`achievement\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_188ad4a77600892026bff4823f4\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_87775a561720f861a7d03175abc\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_deaa8cb01bd0a343e8b649d32ce\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_982075c0920620c2c7b889082a1\` FOREIGN KEY (\`monsterId\`) REFERENCES \`monster\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` ADD CONSTRAINT \`FK_491821107b7d2025684aed48d6a\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Hero\` ADD CONSTRAINT \`FK_e55693d1e875b82374c566656d2\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Hero\` ADD CONSTRAINT \`FK_f4b52888f1506147eb3f57ad09c\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_achievement\` ADD CONSTRAINT \`FK_2a418515c335cab7c5ba70c28b3\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_achievement\` ADD CONSTRAINT \`FK_843ecd1965f1aac694875674a18\` FOREIGN KEY (\`achievementId\`) REFERENCES \`achievement\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user_achievement\` DROP FOREIGN KEY \`FK_843ecd1965f1aac694875674a18\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_achievement\` DROP FOREIGN KEY \`FK_2a418515c335cab7c5ba70c28b3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Hero\` DROP FOREIGN KEY \`FK_f4b52888f1506147eb3f57ad09c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Hero\` DROP FOREIGN KEY \`FK_e55693d1e875b82374c566656d2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` DROP FOREIGN KEY \`FK_491821107b7d2025684aed48d6a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_982075c0920620c2c7b889082a1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_deaa8cb01bd0a343e8b649d32ce\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` DROP FOREIGN KEY \`FK_87775a561720f861a7d03175abc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_188ad4a77600892026bff4823f4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` DROP FOREIGN KEY \`FK_a51c214e5fe08f5122036ac6e2e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`condition\` DROP FOREIGN KEY \`FK_5ba0372106c819bade7ccaaae26\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_843ecd1965f1aac694875674a1\` ON \`user_achievement\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_2a418515c335cab7c5ba70c28b\` ON \`user_achievement\``,
    );
    await queryRunner.query(`DROP TABLE \`user_achievement\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_f4b52888f1506147eb3f57ad09\` ON \`Hero\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e55693d1e875b82374c566656d\` ON \`Hero\``,
    );
    await queryRunner.query(`DROP TABLE \`Hero\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(
      `DROP INDEX \`REL_491821107b7d2025684aed48d6\` ON \`statistic\``,
    );
    await queryRunner.query(`DROP TABLE \`statistic\``);
    await queryRunner.query(
      `DROP INDEX \`REL_982075c0920620c2c7b889082a\` ON \`character\``,
    );
    await queryRunner.query(`DROP TABLE \`character\``);
    await queryRunner.query(
      `DROP INDEX \`REL_87775a561720f861a7d03175ab\` ON \`monster\``,
    );
    await queryRunner.query(`DROP TABLE \`monster\``);
    await queryRunner.query(`DROP TABLE \`game\``);
    await queryRunner.query(`DROP TABLE \`item\``);
    await queryRunner.query(`DROP TABLE \`achievement\``);
    await queryRunner.query(`DROP TABLE \`effect\``);
    await queryRunner.query(`DROP TABLE \`condition\``);
  }
}
