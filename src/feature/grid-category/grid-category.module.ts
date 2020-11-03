import { Module } from '@nestjs/common';
import { GridCategoryService } from './grid-category.service';
import { GridCategoryController } from './grid-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GridCategory } from '../../entity/GridCategory';

@Module({
  imports: [TypeOrmModule.forFeature([GridCategory])],
  providers: [GridCategoryService],
  controllers: [GridCategoryController],
})
export class GridCategoryModule {}
