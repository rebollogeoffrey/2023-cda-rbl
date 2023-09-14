//Base
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

// Service
import { AchievementService } from './achievement.service';

// Entity
import { Achievement } from '../entities/achievement.entity';

// Guard
import { AuthGuard } from '@nestjs/passport';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achService: AchievementService) {}

  @Get()
  getAchievements() {
    return this.achService.getAchievements();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getAchievementById(@Param() params) {
    return this.achService.getAchievementById(params.id);
  }

  @Post()
  saveAchievement(@Body() achievement: Achievement) {
    return this.achService.saveAchievement(achievement);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  updateAchievement(
    @Body()
    achievementBody: Achievement,
  ) {
    return this.achService.saveAchievement(achievementBody);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  deleteAchievement(@Body() achievement: Achievement) {
    return this.achService.deleteAchievement(achievement);
  }
}
