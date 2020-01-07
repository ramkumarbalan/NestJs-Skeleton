import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello() {
    return 'Gateway working fine........';
  }
}
