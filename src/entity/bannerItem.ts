import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Banner } from './banner.entity';

@Entity('banner_item')
export class BannerItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  img: string;
  @Column({ nullable: true })
  name: string; //  基本原信息
  @Column({ nullable: true })
  keyword: string;
  @Column('smallint', { nullable: false })
  type: number;
  //XXX: banner外键的拥有者，如果想在查询banner时获取bannerItem,则需要保证：
  //~1. 正确建立1对多的双向关系 （导航属性互相指）
  //~2. 在查询时候使用relations将导航属性加入其中（并不是真正对应的那张表！）
  @ManyToOne(type => Banner,banner => banner.items)
  @JoinColumn({ name: 'banner_id' })
  banner: Banner
}
