// Base
import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT_TEST || '3306'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../*/entities/*.entity.ts'],
  synchronize: false,
  migrations: [__dirname + '/../mock_data/*-mock_data.ts'],
});
