import { Test, TestingModule } from '@nestjs/testing';
import { GridCategoryController } from './grid-category.controller';

describe('GridCategoryController', () => {
  let controller: GridCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GridCategoryController],
    }).compile();

    controller = module.get<GridCategoryController>(GridCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
