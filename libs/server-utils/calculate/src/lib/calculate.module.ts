import { Module } from '@nestjs/common';
import { CalculateController } from './calculate.controller';
import { CalculateService } from './calculate.service';

@Module({
  imports: [],
  controllers: [CalculateController],
  providers: [CalculateService],
  exports: [CalculateService],
})
export class CalculateModule {}
