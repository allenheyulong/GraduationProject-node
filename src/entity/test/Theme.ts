import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("theme", { schema: "bua" })
export class Theme {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: 60 })
  title: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  createTime: Date | null;

  @Column("varchar", { name: "tpl_name", nullable: true, length: 30 })
  tplName: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  updateTime: Date | null;

  @Column("datetime", { name: "delete_time", nullable: true })
  deleteTime: Date | null;

  @Column("varchar", { name: "entrance_img", nullable: true, length: 255 })
  entranceImg: string | null;

  @Column("varchar", { name: "extend", nullable: true, length: 255 })
  extend: string | null;

  @Column("varchar", { name: "internal_top_img", nullable: true, length: 255 })
  internalTopImg: string | null;

  @Column("varchar", { name: "title_img", nullable: true, length: 255 })
  titleImg: string | null;

  @Column("tinyint", {
    name: "online",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  online: number | null;
}
