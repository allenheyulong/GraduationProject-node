import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from '../../entity/banner.entity';
import { Repository } from 'typeorm';
import { BannerItem } from '../../entity/bannerItem';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>
  ) {}
  async findAll() {
    return this.bannerRepository.find();
  }
  async getByName(name: string) {
    return this.bannerRepository.find({relations: ["items"]});
  }
}
