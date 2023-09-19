import { Module } from '@nestjs/common';
import { EffectService } from './effect.service';
import { EffectController } from './effect.controller';

@Module({
  controllers: [EffectController],
  providers: [EffectService],
})
export class EffectModule {}
