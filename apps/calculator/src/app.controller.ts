import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from '@barz/entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getCat(): Cat {
    return this.appService.getCat();
  }
}
