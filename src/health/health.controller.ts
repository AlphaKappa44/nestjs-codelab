import { Controller, Get } from '@nestjs/common';
import { check } from 'prettier';

@Controller('health')
export class HealthController {
  @Get()
  check(): string {
    return 'Everything is OK';
  }
}
