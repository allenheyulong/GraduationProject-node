import { Test, TestingModule } from '@nestjs/testing';
import { SpuController } from './spu.controller';

describe('SpuController', () => {
  let controller: SpuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpuController],
    }).compile();

    controller = module.get<SpuController>(SpuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
