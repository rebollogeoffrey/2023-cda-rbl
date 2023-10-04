import { Module } from '@nestjs/common';
import { RequirementService } from './requirement.service';
import { RequirementController } from './requirement.controller';

@Module({
  controllers: [RequirementController],
  providers: [RequirementService],
})
export class RequirementModule {}
