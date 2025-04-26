import { Injectable } from '@nestjs/common';
import { SumRequestDto, SumResponseDto } from 'api-interfaces';

@Injectable()
export class CalculateService {
  sum(data: SumRequestDto): SumResponseDto {
    console.log('🔥SUM FUNCTION CALLED🔥');
    const { a, b } = data;
    return { sum: a + b };
  }
}
