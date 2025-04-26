import { Body, Controller, Post } from '@nestjs/common';
import { SumRequestDto, SumResponseDto } from 'api-interfaces';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Post('sum')
  sum(@Body() data: SumRequestDto): SumResponseDto {
    return this.calculateService.sum(data);
  }
}
