import { Injectable } from '@nestjs/common';
import { CreateEffectDto } from './dto/create-effect.dto';
import { UpdateEffectDto } from './dto/update-effect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Effect } from './entities/effect.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EffectService {
  constructor(
    @InjectRepository(Effect) private effectRepository: Repository<Effect>,
  ) {}
  create(createEffectDto: CreateEffectDto) {
    return 'This action adds a new effect';
  }

  createMockData(mockData: [Effect]) {
    console.log('mockData :>> ', mockData);

    return mockData.map((data) => {
      console.log('data :>> ', data);

      return this.effectRepository.save(data);
    });
  }

  findAll() {
    return this.effectRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} effect`;
  }

  update(id: number, updateEffectDto: UpdateEffectDto) {
    return `This action updates a #${id} effect`;
  }

  remove(id: number) {
    return `This action removes a #${id} effect`;
  }
}
