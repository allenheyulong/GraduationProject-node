import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { IpaginationResult, SpuService } from './spu.service';
import { _httpException } from '../../core/exception/_http.exception';
import { Spu } from '../../entity/Spu';

export interface Ipagination {
  start?: number;
  count?: number; // 每一次获取的数量
}

export interface Idetail {
  id: string;
}
@Controller('spu')
export class SpuController {
  constructor(private readonly spuService: SpuService) {}

  @Get('id/detail')
  async getDetail(@Query() query: Idetail) {
    const spu: Spu = await this.spuService.getDetailSpu(query.id);
    if (!spu) {
      throw new _httpException({
        message: '没有找到指定的SPU详细信息',
      });
    }
    return spu;
  }
  //  spu/latest?start=0&count=10
  @Get('latest')
  async getLatest(
    @Query() query: Ipagination,
    //  TODO: 设置一个_httpException类型
  ): Promise<IpaginationResult | any> {
    //设置初始值
    if (!query.count) {
      query.count = 10;
    }
    if (!query.start) {
      query.start = 0;
    }
    query.start = Number(query.start);
    query.count = Number(query.count);
    //TODO: string转换成int 的 管道？？
    const pagingData = await this.spuService.getLatestPagingSpu(query);
    if (!pagingData.items || pagingData.items.length === 0) {
      throw new _httpException({
        message: '获取SPU数据为空',
      });
    }
    return pagingData;
  }
}
