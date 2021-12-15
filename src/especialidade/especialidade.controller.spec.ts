import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadeController } from './especialidade.controller';
import { EspecialidadeService } from './especialidade.service';

describe('EspecialidadeController', () => {
  let controller: EspecialidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialidadeController],
      providers: [EspecialidadeService],
    }).compile();

    controller = module.get<EspecialidadeController>(EspecialidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
