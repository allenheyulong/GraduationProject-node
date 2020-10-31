import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BannerItem} from "./BannerItem";

@Entity("banner", { schema: "sleeve" })
export class Banner {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

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

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", {
    name: "img",
    nullable: true,
    comment: "部分banner可能有标题图片",
    length: 255,
  })
  img: string | null;

  /**
   * Banner -> 多个 BannerItem
   */
  @OneToMany(type => BannerItem,bannerItem => bannerItem.banner)
  item_list: BannerItem[];
}
