import { Controller, Get } from '@nestjs/common';
import { check } from 'prettier';

@Controller({ path: '/health', version: '1' })

@Controller('health')
export class HealthController {
  @Get()
  check(): string {
    return 'Everything is OK';
  }
}
