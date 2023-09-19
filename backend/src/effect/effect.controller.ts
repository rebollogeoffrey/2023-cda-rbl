import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EffectService } from './effect.service';
import { CreateEffectDto } from './dto/create-effect.dto';
import { UpdateEffectDto } from './dto/update-effect.dto';

@Controller('effect')
export class EffectController {
  constructor(private readonly effectService: EffectService) {}

  @Post()
  create(@Body() createEffectDto: CreateEffectDto) {
    return this.effectService.create(createEffectDto);
  }

  @Get()
  findAll() {
    return this.effectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.effectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEffectDto: UpdateEffectDto) {
    return this.effectService.update(+id, updateEffectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.effectService.remove(+id);
  }
}
