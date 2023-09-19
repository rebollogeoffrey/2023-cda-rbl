import { Test, TestingModule } from '@nestjs/testing';
import { EffectController } from './effect.controller';
import { EffectService } from './effect.service';

describe('EffectController', () => {
  let controller: EffectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EffectController],
      providers: [EffectService],
    }).compile();

    controller = module.get<EffectController>(EffectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
