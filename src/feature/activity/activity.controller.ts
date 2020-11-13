import { Controller, Get, Param } from '@nestjs/common';

import { ActivityService } from './activity.service';
import { _httpException } from '../../core/exception/_http.exception';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}
  @Get('name/:name')
  async getActivityByName(@Param() params) {
    const name = params.name;
    const curActivity = this.activityService.getByName(name);
    if (!curActivity) {
      throw new _httpException({
        message: '没有找到指定的活动数据',
      });
    }
    return curActivity;
  }
  @Get('name/:name/with_coupon')
  async getActivityWithCoupon(@Param() params) {
    const name = params.name;
    const activityWithCoupon = this.activityService.getByNameWithCoupon(name);
    if (!activityWithCoupon) {
      throw new _httpException({
        message: '没有找到指定的活动优惠券',
      });
    }
    return activityWithCoupon;
  }
}
