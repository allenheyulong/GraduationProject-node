import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("spu_detail_img", { schema: "sleeve" })
export class SpuDetailImg {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "img", length: 255 })
  img: string;

  @Column("int", { name: "spu_id", nullable: true, unsigned: true })
  spuId: number | null;

  @Column("int", { name: "index", unsigned: true })
  index: number;

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
}
