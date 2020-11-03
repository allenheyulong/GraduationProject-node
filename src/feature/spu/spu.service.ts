import { Injectable } from '@nestjs/common';
import { Ipagination } from './spu.controller';
import { Spu } from '../../entity/Spu';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export interface IpaginationResult {
  items: Spu[];
  total: number;
}

@Injectable()
export class SpuService {
  constructor(
    @InjectRepository(Spu)
    private readonly spuRepository: Repository<Spu>,
  ) {}
  async getDetailSpu(id): Promise<Spu | undefined> {
    return this.spuRepository.findOne({
      relations: ['sku_list'],
      where: { id },
    });
  }
  async getLatestPagingSpu(
    pagingParams: Ipagination,
  ): Promise<IpaginationResult> {
    const [result, total] = await this.spuRepository.findAndCount({
      take: pagingParams.count,
      skip: pagingParams.start,
    });
    return {
      items: result,
      total,
    };
  }
}
