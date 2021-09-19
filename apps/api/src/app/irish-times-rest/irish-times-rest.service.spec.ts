import { Test, TestingModule } from '@nestjs/testing';
import { IrishTimesRestService } from './irish-times-rest.service';

describe('IrishTimesRestService', () => {
  let service: IrishTimesRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IrishTimesRestService],
    }).compile();

    service = module.get<IrishTimesRestService>(IrishTimesRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
