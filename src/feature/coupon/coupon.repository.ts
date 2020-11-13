import { EntityRepository, Repository } from 'typeorm';
import { Coupon } from '../../entity/Coupon';
import { UserCoupon } from '../../entity/UserCoupon';
import { User } from '../../entity/User';

@EntityRepository(Coupon)
export class CouponRepository extends Repository<Coupon> {
  async getWholeStoreCoupon() {
    const list = this.find({
      where: {
        wholeStore: '0',
      },
    });
    return list;
  }
  async getCouponListByCategory(cid: string) {
    /**
     * 1. 连表查询目标 categoryID的数据
     * 2. 查询 coupon 表关联的 activity表，通过日期再次过滤数据
     *
     * 解了一个问题： 如果Entity 没有带@Column 注解，当sql查询出数据后，反射会entity时会被过滤掉。
     *
     */
    const curDate = new Date();
    const list = await this.createQueryBuilder('coupon')
      .leftJoin('coupon.categories', 'category')
      .leftJoin('coupon.activityId', 'activity')
      .where('category.id = :cid', { cid })
      .andWhere('activity.startTime < :curDate', { curDate })
      .andWhere('activity.endTime > :curDate', { curDate })
      .getMany();
    return list;
  }

  /**
   * 学到的点：
   * 如果想获取第三张表 直接读就行了。
   * 不过第三张表会被typeORM重命名 -> 以主表+关联表 进行重命名 比如以前叫user_coupon  会被 as coupon_user
   * 而且只要想用join查询，就必须在entity中建立多对多的关系
   *
   *
   * @param uid
   * @param curDate
   */
  async queryByStatus(uid: number, curDate: Date, status: string) {
    const query = this.createQueryBuilder('coupon')
      .leftJoin('coupon.user', 'user', 'user.id = :uid', { uid })
      .where('coupon_user.status = :status', { status })
      .andWhere('coupon.startTime < :curDate', { curDate })
      .andWhere('coupon.endTime > :curDate', { curDate })
      .andWhere('coupon_user.order_id IS null');

    const allAvailable: Coupon[] = await query.getMany();
    return allAvailable;
  }
}
