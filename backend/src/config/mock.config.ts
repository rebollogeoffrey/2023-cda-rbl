// Base
import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB_TEST,
  entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/../mock_data/*-mock_data.ts'],
});
