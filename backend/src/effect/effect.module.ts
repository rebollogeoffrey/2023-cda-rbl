import { Module } from '@nestjs/common';
import { EffectService } from './effect.service';
import { EffectController } from './effect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Effect } from './entities/effect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Effect])],
  controllers: [EffectController],
  providers: [EffectService],
})
export class EffectModule {}
