import { MigrationInterface, QueryRunner } from 'typeorm';

export class Serkv722221695307478578 implements MigrationInterface {
  name = 'Serkv722221695307478578';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`statistic\` (\`id\` varchar(36) NOT NULL, \`nb_win\` int NOT NULL, \`nb_lose\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`gameId\` varchar(36) NULL, UNIQUE INDEX \`REL_491821107b7d2025684aed48d6\` (\`gameId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`historic\` (\`id\` varchar(36) NOT NULL, \`nb_killed\` int NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statisticId\` varchar(36) NULL, \`categoryId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`requirement\` (\`id\` varchar(36) NOT NULL, \`verb\` varchar(50) NOT NULL, \`counter\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`role\` enum ('always', 'animate', 'blob', 'daemon', 'dexterity', 'dodge', 'environment', 'gold', 'golem', 'health_max', 'magic', 'merchant', 'partner', 'plant', 'run', 'strength', 'thief', 'undead', 'wolf') NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`monster\` (\`id\` varchar(36) NOT NULL, \`difficulty\` int NOT NULL DEFAULT '1', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`characterId\` varchar(36) NULL, \`categoryId\` varchar(36) NULL, UNIQUE INDEX \`REL_87775a561720f861a7d03175ab\` (\`characterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`character\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`max_health\` int NULL, \`strength\` int NULL, \`dexterity\` int NULL, \`dodge\` int NULL, \`description\` varchar(255) NULL DEFAULT 'You think : "Why does this only happen to me?!"', \`url_image\` varchar(255) NULL, \`gameId\` varchar(36) NULL, \`monsterId\` varchar(36) NULL, UNIQUE INDEX \`REL_982075c0920620c2c7b889082a\` (\`monsterId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NULL, \`description\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statisticId\` varchar(36) NULL, UNIQUE INDEX \`REL_d9db858fa39ad0727cf0b1f0b0\` (\`statisticId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`url_image\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`gameId\` varchar(36) NULL, \`effectId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`effect\` (\`id\` varchar(36) NOT NULL, \`is_on_hero\` tinyint NOT NULL DEFAULT 0, \`stat_affected\` enum ('gold', 'health_max', 'strength', 'dexterity', 'dodge') NOT NULL DEFAULT 'gold', \`value\` int NOT NULL, \`when\` varchar(50) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`role\` enum ('admin', 'basic') NOT NULL DEFAULT 'basic', \`name\` varchar(80) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`url_image\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`achievement\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NULL, \`description\` varchar(255) NULL, \`url_image\` varchar(255) NULL, \`is_owned\` tinyint NOT NULL DEFAULT 0, \`gameId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`hero\` (\`characterId\` varchar(36) NOT NULL, \`itemId\` varchar(36) NOT NULL, INDEX \`IDX_2c4cf948c30f37253ec4a0d0b6\` (\`characterId\`), INDEX \`IDX_312c667db858cf91a4e94a47f5\` (\`itemId\`), PRIMARY KEY (\`characterId\`, \`itemId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_achievement\` (\`userId\` varchar(36) NOT NULL, \`achievementId\` varchar(36) NOT NULL, INDEX \`IDX_2a418515c335cab7c5ba70c28b\` (\`userId\`), INDEX \`IDX_843ecd1965f1aac694875674a1\` (\`achievementId\`), PRIMARY KEY (\`userId\`, \`achievementId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` ADD CONSTRAINT \`FK_491821107b7d2025684aed48d6a\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_e698696f55f4e6a2a462b9af782\` FOREIGN KEY (\`statisticId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_737a849350be559024b69af42c1\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`requirement\` ADD CONSTRAINT \`FK_719579404e981b223fe6657837a\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_87775a561720f861a7d03175abc\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_0cdf6c89f9d94f01eba6146e117\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_deaa8cb01bd0a343e8b649d32ce\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_982075c0920620c2c7b889082a1\` FOREIGN KEY (\`monsterId\`) REFERENCES \`monster\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` ADD CONSTRAINT \`FK_d9db858fa39ad0727cf0b1f0b0c\` FOREIGN KEY (\`statisticId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_188ad4a77600892026bff4823f4\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_de253b4e6f57c1bd9493b391853\` FOREIGN KEY (\`effectId\`) REFERENCES \`effect\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` ADD CONSTRAINT \`FK_f86d0fec318147634a6d623848b\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`achievement\` ADD CONSTRAINT \`FK_8ff9fb55f1302a3219f1842d687\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`hero\` ADD CONSTRAINT \`FK_2c4cf948c30f37253ec4a0d0b6a\` FOREIGN KEY (\`characterId\`) REFERENCES \`character\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`hero\` ADD CONSTRAINT \`FK_312c667db858cf91a4e94a47f5b\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
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
      `ALTER TABLE \`hero\` DROP FOREIGN KEY \`FK_312c667db858cf91a4e94a47f5b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`hero\` DROP FOREIGN KEY \`FK_2c4cf948c30f37253ec4a0d0b6a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`achievement\` DROP FOREIGN KEY \`FK_8ff9fb55f1302a3219f1842d687\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` DROP FOREIGN KEY \`FK_f86d0fec318147634a6d623848b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_de253b4e6f57c1bd9493b391853\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_188ad4a77600892026bff4823f4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` DROP FOREIGN KEY \`FK_d9db858fa39ad0727cf0b1f0b0c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_982075c0920620c2c7b889082a1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` DROP FOREIGN KEY \`FK_deaa8cb01bd0a343e8b649d32ce\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` DROP FOREIGN KEY \`FK_0cdf6c89f9d94f01eba6146e117\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` DROP FOREIGN KEY \`FK_87775a561720f861a7d03175abc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`requirement\` DROP FOREIGN KEY \`FK_719579404e981b223fe6657837a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` DROP FOREIGN KEY \`FK_737a849350be559024b69af42c1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` DROP FOREIGN KEY \`FK_e698696f55f4e6a2a462b9af782\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` DROP FOREIGN KEY \`FK_491821107b7d2025684aed48d6a\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_843ecd1965f1aac694875674a1\` ON \`user_achievement\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_2a418515c335cab7c5ba70c28b\` ON \`user_achievement\``,
    );
    await queryRunner.query(`DROP TABLE \`user_achievement\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_312c667db858cf91a4e94a47f5\` ON \`hero\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_2c4cf948c30f37253ec4a0d0b6\` ON \`hero\``,
    );
    await queryRunner.query(`DROP TABLE \`hero\``);
    await queryRunner.query(`DROP TABLE \`achievement\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`effect\``);
    await queryRunner.query(`DROP TABLE \`item\``);
    await queryRunner.query(
      `DROP INDEX \`REL_d9db858fa39ad0727cf0b1f0b0\` ON \`game\``,
    );
    await queryRunner.query(`DROP TABLE \`game\``);
    await queryRunner.query(
      `DROP INDEX \`REL_982075c0920620c2c7b889082a\` ON \`character\``,
    );
    await queryRunner.query(`DROP TABLE \`character\``);
    await queryRunner.query(
      `DROP INDEX \`REL_87775a561720f861a7d03175ab\` ON \`monster\``,
    );
    await queryRunner.query(`DROP TABLE \`monster\``);
    await queryRunner.query(`DROP TABLE \`category\``);
    await queryRunner.query(`DROP TABLE \`requirement\``);
    await queryRunner.query(`DROP TABLE \`historic\``);
    await queryRunner.query(
      `DROP INDEX \`REL_491821107b7d2025684aed48d6\` ON \`statistic\``,
    );
    await queryRunner.query(`DROP TABLE \`statistic\``);
  }
}
