// Base
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Config
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

// Actual Module
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Other Modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
