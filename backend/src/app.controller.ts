// Base
import { Controller, Get } from '@nestjs/common';

// Service
import { AppService } from './app.service';

// Guard
// import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
