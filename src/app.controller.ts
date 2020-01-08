import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello() {
    return 'Hey hi! gateway here...i am working fine...';
  }
}
