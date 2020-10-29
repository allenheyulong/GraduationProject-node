import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { BannerItem } from './bannerItem';

@Entity("banner")
export class Banner extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string; //  基本原信息
  @Column({nullable: true})
  description: string;
  @Column({nullable: true})
  title: string; // 前端显示的标题？不知道做什么用的
  @Column({nullable: true})
  img: string; // 前端显示的标题？不知道做什么用的

  //XXX: 如何在typeORM 创建一对多关系？为什么还需要第二个参数？
  //~: 为什么需要在另外关系的维护方加上ManyToOne? 虽然这样就将其变为外键了吧

  //如何使用连带查询？？？
  @OneToMany(type => BannerItem, bannerItem => bannerItem.banner)
  items: BannerItem[];
}
