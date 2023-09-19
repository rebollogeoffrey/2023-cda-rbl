// Base
import { DataSource } from 'typeorm';
import { databaseConfig } from './database.config';

export default new DataSource({
  ...databaseConfig,
  migrations: [__dirname + '/../mock_data/*-mock_data.ts'],
});
