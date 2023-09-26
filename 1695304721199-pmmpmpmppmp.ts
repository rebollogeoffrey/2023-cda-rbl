import { MigrationInterface, QueryRunner } from 'typeorm';

export class Pmmpmpmppmp1695304721199 implements MigrationInterface {
  name = 'Pmmpmpmppmp1695304721199';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`effect\` varchar(255) NULL, \`url_image\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`gameIdId\` varchar(36) NULL, \`effectIdId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`character\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`max_health\` int NULL, \`strength\` int NULL, \`dexterity\` int NULL, \`dodge\` int NULL, \`description\` varchar(255) NULL DEFAULT 'You think : "Why does this only happen to me?!"', \`url_image\` varchar(255) NULL, \`gameIdId\` varchar(36) NULL, \`monsterIdId\` varchar(36) NULL, UNIQUE INDEX \`REL_1436850f8b1a52421760ef250a\` (\`monsterIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`game\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NULL, \`description\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statisticIdId\` varchar(36) NULL, UNIQUE INDEX \`REL_a54c2b54c5431e4b9998c356d9\` (\`statisticIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`role\` enum ('admin', 'basic') NOT NULL DEFAULT 'basic', \`name\` varchar(80) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`url_image\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`achievement\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NULL, \`description\` varchar(255) NULL, \`url_image\` varchar(255) NULL, \`is_owned\` tinyint NOT NULL DEFAULT 0, \`gameIdId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`effect\` (\`id\` varchar(36) NOT NULL, \`is_on_hero\` tinyint NOT NULL DEFAULT 0, \`stat_affected\` enum ('gold', 'health_max', 'strength', 'dexterity', 'dodge') NOT NULL DEFAULT 'gold', \`value\` int NOT NULL, \`when\` varchar(50) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryIdId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`hero\` (\`characterId\` varchar(36) NOT NULL, \`itemId\` varchar(36) NOT NULL, INDEX \`IDX_2c4cf948c30f37253ec4a0d0b6\` (\`characterId\`), INDEX \`IDX_312c667db858cf91a4e94a47f5\` (\`itemId\`), PRIMARY KEY (\`characterId\`, \`itemId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_achievement\` (\`userId\` varchar(36) NOT NULL, \`achievementId\` varchar(36) NOT NULL, INDEX \`IDX_2a418515c335cab7c5ba70c28b\` (\`userId\`), INDEX \`IDX_843ecd1965f1aac694875674a1\` (\`achievementId\`), PRIMARY KEY (\`userId\`, \`achievementId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`statistic\` (\`id\` varchar(36) NOT NULL, \`nb_win\` int NOT NULL, \`nb_lose\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`gameIdId\` varchar(36) NULL, UNIQUE INDEX \`REL_78660a04d34379e554a85dd356\` (\`gameIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`historic\` (\`id\` varchar(36) NOT NULL, \`nb_killed\` int NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statisticIdId\` varchar(36) NULL, \`categoryIdId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`requirement\` (\`id\` varchar(36) NOT NULL, \`verb\` varchar(50) NOT NULL, \`counter\` int NOT NULL, \`category\` varchar(80) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryIdId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`role\` enum ('always', 'animate', 'blob', 'daemon', 'dexterity', 'dodge', 'environment', 'gold', 'golem', 'health_max', 'magic', 'merchant', 'partner', 'plant', 'run', 'strength', 'thief', 'undead', 'wolf') NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`monster\` (\`id\` varchar(36) NOT NULL, \`difficulty\` int NOT NULL DEFAULT '1', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`characterIdId\` varchar(36) NULL, \`categoryIdId\` varchar(36) NULL, UNIQUE INDEX \`REL_ebdf835323c39631d5d18ba077\` (\`characterIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` ADD CONSTRAINT \`FK_78660a04d34379e554a85dd3567\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_6e07d4d3175c794d57a9a108363\` FOREIGN KEY (\`statisticIdId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_6293728ad0db64d24f8326d8eac\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`requirement\` ADD CONSTRAINT \`FK_78374eb2fa8577c39bd73b1b403\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_ebdf835323c39631d5d18ba0776\` FOREIGN KEY (\`characterIdId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_c4353ffad3ae4268b3bcf6a24d6\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_84b289847057d4a82a6b4fa508d\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_1436850f8b1a52421760ef250ae\` FOREIGN KEY (\`monsterIdId\`) REFERENCES \`monster\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` ADD CONSTRAINT \`FK_a54c2b54c5431e4b9998c356d95\` FOREIGN KEY (\`statisticIdId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_56fc09a5cdd4e05a6af8406544c\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_fff59c38602e797f5067869a265\` FOREIGN KEY (\`effectIdId\`) REFERENCES \`effect\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` ADD CONSTRAINT \`FK_eaf9a07f34cdb0ad222177ba1cd\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`achievement\` ADD CONSTRAINT \`FK_f00485d9164ea5e0cb7afa8bc15\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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

    await queryRunner.query(
      `ALTER TABLE \`requirement\` ADD CONSTRAINT \`FK_78374eb2fa8577c39bd73b1b403\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_ebdf835323c39631d5d18ba0776\` FOREIGN KEY (\`characterIdId\`) REFERENCES \`character\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`monster\` ADD CONSTRAINT \`FK_c4353ffad3ae4268b3bcf6a24d6\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_56fc09a5cdd4e05a6af8406544c\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_fff59c38602e797f5067869a265\` FOREIGN KEY (\`effectIdId\`) REFERENCES \`effect\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_84b289847057d4a82a6b4fa508d\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`character\` ADD CONSTRAINT \`FK_1436850f8b1a52421760ef250ae\` FOREIGN KEY (\`monsterIdId\`) REFERENCES \`monster\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_6e07d4d3175c794d57a9a108363\` FOREIGN KEY (\`statisticIdId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`historic\` ADD CONSTRAINT \`FK_6293728ad0db64d24f8326d8eac\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistic\` ADD CONSTRAINT \`FK_78660a04d34379e554a85dd3567\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`game\` ADD CONSTRAINT \`FK_a54c2b54c5431e4b9998c356d95\` FOREIGN KEY (\`statisticIdId\`) REFERENCES \`statistic\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`achievement\` ADD CONSTRAINT \`FK_f00485d9164ea5e0cb7afa8bc15\` FOREIGN KEY (\`gameIdId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`effect\` ADD CONSTRAINT \`FK_eaf9a07f34cdb0ad222177ba1cd\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
    await queryRunner.query(`DROP TABLE \`user_achievement\``);
    await queryRunner.query(`DROP TABLE \`hero\``);
    await queryRunner.query(`DROP TABLE \`effect\``);
    await queryRunner.query(`DROP TABLE \`achievement\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`game\``);
    await queryRunner.query(`DROP TABLE \`character\``);
    await queryRunner.query(`DROP TABLE \`item\``);
    await queryRunner.query(`DROP TABLE \`monster\``);
    await queryRunner.query(`DROP TABLE \`category\``);
    await queryRunner.query(`DROP TABLE \`statistic\``);
  }
}
