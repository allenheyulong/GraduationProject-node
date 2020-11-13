import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("spu", { schema: "bua" })
export class Spu {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "subtitle", nullable: true, length: 800 })
  subtitle: string | null;

  @Column("int", { name: "category_id", unsigned: true })
  categoryId: number;

  @Column("int", { name: "root_category_id", nullable: true })
  rootCategoryId: number | null;

  @Column("tinyint", { name: "online", unsigned: true, default: () => "'1'" })
  online: number;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  updateTime: Date | null;

  @Column("datetime", { name: "delete_time", nullable: true })
  deleteTime: Date | null;

  @Column("varchar", {
    name: "price",
    comment: "文本型价格，有时候SPU需要展示的是一个范围，或者自定义平均价格",
    length: 20,
  })
  price: string;

  @Column("int", {
    name: "sketch_spec_id",
    nullable: true,
    comment: "某种规格可以直接附加单品图片",
    unsigned: true,
  })
  sketchSpecId: number | null;

  @Column("int", {
    name: "default_sku_id",
    nullable: true,
    comment: "默认选中的sku",
  })
  defaultSkuId: number | null;

  @Column("varchar", { name: "img", nullable: true, length: 255 })
  img: string | null;

  @Column("varchar", { name: "discount_price", nullable: true, length: 20 })
  discountPrice: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "tags", nullable: true, length: 30 })
  tags: string | null;

  @Column("tinyint", {
    name: "is_test",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isTest: number | null;

  @Column("json", { name: "spu_theme_img", nullable: true })
  spuThemeImg: object | null;

  @Column("varchar", { name: "for_theme_img", nullable: true, length: 255 })
  forThemeImg: string | null;
}
