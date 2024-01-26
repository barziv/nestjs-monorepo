import { describe, beforeEach, it, expect } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat } from '@barz/entities';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    const service = app.get<AppService>(AppService);
    appController = new AppController(service);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('12');
    });

    it('should return cat', () => {
      const res = new Cat("test");
      expect(appController.getCat()).toEqual(res);
    });
  });

});
