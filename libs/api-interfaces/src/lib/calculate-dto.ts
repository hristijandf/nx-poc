import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

// Request DTO schema for sum operation
export const SumRequestSchema = z.object({
  a: z.number(),
  b: z.number(),
});

// Response DTO schema for sum operation
export const SumResponseSchema = z.object({
  sum: z.number(),
});

// Create DTO classes using createZodDto
export class SumRequestDto extends createZodDto(SumRequestSchema) {}
export class SumResponseDto extends createZodDto(SumResponseSchema) {}

// TypeScript types derived from Zod schemas
export type SumRequest = z.infer<typeof SumRequestSchema>;
export type SumResponse = z.infer<typeof SumResponseSchema>;
