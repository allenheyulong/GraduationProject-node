import { Test, TestingModule } from '@nestjs/testing';
import { GridCategoryService } from './grid-category.service';

describe('GridCategoryService', () => {
  let service: GridCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GridCategoryService],
    }).compile();

    service = module.get<GridCategoryService>(GridCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
