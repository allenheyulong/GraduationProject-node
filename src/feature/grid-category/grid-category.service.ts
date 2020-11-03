import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Banner } from '../../entity/Banner';
import { InjectRepository } from '@nestjs/typeorm';
import { GridCategory } from '../../entity/GridCategory';

@Injectable()
export class GridCategoryService {
  constructor(
    @InjectRepository(GridCategory)
    private readonly gridCategoryRepository: Repository<GridCategory>,
  ) {}
  async getGridCategoryList() {
    return this.gridCategoryRepository.find();
  }
}
