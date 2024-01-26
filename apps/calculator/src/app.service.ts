import { Injectable } from '@nestjs/common';
import { add } from '@barz/math';
import { Cat } from '@barz/entities';

@Injectable()
export class AppService {
  getHello(): string {
    return String(add(6, 6));
  }

  getCat(): Cat {
    return new Cat("test");
  }
}
