import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("grid_category", { schema: "bua" })
export class GridCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", { name: "img", nullable: true, length: 255 })
  img: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

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

  @Column("int", { name: "category_id", nullable: true })
  categoryId: number | null;

  @Column("int", { name: "root_category_id", nullable: true })
  rootCategoryId: number | null;
}
