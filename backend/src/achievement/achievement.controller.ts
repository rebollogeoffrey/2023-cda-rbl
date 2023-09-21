//Base
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

// Service
import { AchievementService } from './achievement.service';

// DTO
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

// Guard
import { AuthGuard } from '@nestjs/passport';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  create(@Body() createAchievementDto: CreateAchievementDto) {
    return this.achievementService.create(createAchievementDto);
  }

  @Get()
  findAll() {
    return this.achievementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.achievementService.update(+id, updateAchievementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achievementService.remove(+id);
  }
}
