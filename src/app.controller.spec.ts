import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MixpanelService } from './mixpanel/mixpanel.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MixpanelService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
