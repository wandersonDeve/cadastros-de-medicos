import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadeService } from './especialidade.service';

describe('EspecialidadeService', () => {
  let service: EspecialidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecialidadeService],
    }).compile();

    service = module.get<EspecialidadeService>(EspecialidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
