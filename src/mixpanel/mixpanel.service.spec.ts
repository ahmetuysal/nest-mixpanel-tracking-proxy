import { Test, TestingModule } from '@nestjs/testing';
import { MixpanelService } from './mixpanel.service';

describe('MixpanelService', () => {
  let service: MixpanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MixpanelService],
    }).compile();

    service = module.get<MixpanelService>(MixpanelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
