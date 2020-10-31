import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("category", {schema: "sleeve"})
export class Category {
  @PrimaryGeneratedColumn({type: "int", name: "id", unsigned: true})
  id: number;

  @Column("varchar", {name: "name", length: 255})
  name: string;

  @Column("varchar", {name: "description", nullable: true, length: 255})
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

  @Column("datetime", {name: "delete_time", nullable: true})
  deleteTime: Date | null;

  @Column("tinyint", {name: "is_root", unsigned: true, default: () => "'0'"})
  isRoot: number;

  @Column("int", {name: "parent_id", nullable: true, unsigned: true})
  parentId: number | null;

  @Column("varchar", {name: "img", nullable: true, length: 255})
  img: string | null;

  @Column("int", {name: "index", nullable: true, unsigned: true})
  index: number | null;

  @Column("int", {
    name: "online",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  online: number | null;

  @Column("int", {name: "level", nullable: true, unsigned: true})
  level: number | null;
}
