import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("activity", { schema: "bua" })
export class Activity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: 60 })
  title: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("datetime", { name: "start_time" })
  startTime: Date;

  @Column("datetime", { name: "end_time" })
  endTime: Date;

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

  @Column("varchar", { name: "remark", nullable: true, length: 60 })
  remark: string | null;

  @Column("tinyint", {
    name: "online",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  online: number | null;

  @Column("varchar", { name: "entrance_img", nullable: true, length: 255 })
  entranceImg: string | null;

  @Column("varchar", { name: "internal_top_img", nullable: true, length: 255 })
  internalTopImg: string | null;

  @Column("varchar", { name: "name", length: 20 })
  name: string;
}
