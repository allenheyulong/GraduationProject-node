import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Activity } from '../../entity/Activity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}
  async getByName(name: string) {
    return this.activityRepository.findOne({
      where: { name },
    });
  }
  async getByNameWithCoupon(name: string) {
    return this.activityRepository.find({
      relations: ['couponList'],
      where: { name },
    });
  }
}
