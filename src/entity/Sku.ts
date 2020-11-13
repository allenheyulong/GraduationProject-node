import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Spu } from './Spu';

@Entity('sku', { schema: 'sleeve' })
export class Sku {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('decimal', { name: 'price', unsigned: true, precision: 10, scale: 2 })
  price: string;

  @Column('decimal', {
    name: 'discount_price',
    nullable: true,
    unsigned: true,
    precision: 10,
    scale: 2,
  })
  discountPrice: string | null;

  @Column('tinyint', { name: 'online', unsigned: true, default: () => "'1'" })
  online: number;

  @Column('varchar', { name: 'img', nullable: true, length: 255 })
  img: string | null;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  createTime: Date | null;

  @Column('datetime', {
    name: 'update_time',
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  updateTime: Date | null;

  @Column('datetime', { name: 'delete_time', nullable: true })
  deleteTime: Date | null;
  // 原来实体的类型必须还要和数据库保持一致
  // 就比如下面如果不是json 是varchar 就会导致查出来的结果是字符串
  @Column({ type: 'json', name: 'specs', nullable: true })
  specs: string | null;

  // 简化前端单个SKU的设计
  @Column('varchar', { name: 'code', nullable: true, length: 255 })
  code: string | null;
  // 库存量
  @Column('int', { name: 'stock', unsigned: true, default: () => "'0'" })
  stock: number;

  @Column('int', { name: 'category_id', nullable: true, unsigned: true })
  categoryId: number | null;

  @Column('int', { name: 'root_category_id', nullable: true, unsigned: true })
  rootCategoryId: number | null;

  @ManyToOne(
    type => Spu,
    spu => spu.sku_list,
  )
  // 在关联查询时，必须 使用JoinColumn 指名表与表在数据库中的关系
  @JoinColumn({
    name: 'spu_id',
  })
  spu_id: number;
}
