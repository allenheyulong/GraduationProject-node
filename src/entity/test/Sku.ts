import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sku", { schema: "bua" })
export class Sku {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("decimal", { name: "price", unsigned: true, precision: 10, scale: 2 })
  price: string;

  @Column("decimal", {
    name: "discount_price",
    nullable: true,
    unsigned: true,
    precision: 10,
    scale: 2,
  })
  discountPrice: string | null;

  @Column("tinyint", { name: "online", unsigned: true, default: () => "'1'" })
  online: number;

  @Column("varchar", { name: "img", nullable: true, length: 255 })
  img: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("int", { name: "spu_id", unsigned: true })
  spuId: number;

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

  @Column("json", { name: "specs", nullable: true })
  specs: object | null;

  @Column("varchar", { name: "code", nullable: true, length: 255 })
  code: string | null;

  @Column("int", { name: "stock", unsigned: true, default: () => "'0'" })
  stock: number;

  @Column("int", { name: "category_id", nullable: true, unsigned: true })
  categoryId: number | null;

  @Column("int", { name: "root_category_id", nullable: true, unsigned: true })
  rootCategoryId: number | null;
}
