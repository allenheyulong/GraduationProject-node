import { Controller, Get } from '@nestjs/common';
import { GridCategoryService } from './grid-category.service';
import { _httpException } from '../../core/exception/_http.exception';

@Controller('grid-category')
export class GridCategoryController {
  constructor(private readonly gridCategoryService: GridCategoryService) {}
  @Get('all')
  async findAll() {
    const gridCategoryList = await this.gridCategoryService.getGridCategoryList();
    if (!gridCategoryList) {
      throw new _httpException({
        message: '没有找到指定的gridCategory数据',
      });
    }
    return gridCategoryList;
  }
}
