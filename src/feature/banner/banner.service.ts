import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Banner} from "../../entity/Banner";

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
  ) {}
  async findAll() {
    debugger
    return this.bannerRepository.find();
  }
  async getByName(name: string) {
    return this.bannerRepository.findOne({
      relations: ['item_list'],
      where: {name}
    });
  }
}
