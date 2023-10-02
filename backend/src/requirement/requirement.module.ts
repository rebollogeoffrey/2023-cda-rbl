import { Module } from '@nestjs/common';
import { RequirementService } from './requirement.service';
import { RequirementController } from './requirement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from './entities/requirement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Requirement])],
  controllers: [RequirementController],
  providers: [RequirementService],
})
export class RequirementModule {}
