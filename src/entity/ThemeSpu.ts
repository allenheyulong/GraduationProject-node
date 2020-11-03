import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("theme_spu", { schema: "sleeve" })
export class ThemeSpu {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "theme_id", unsigned: true })
  themeId: number;

  @Column("int", { name: "spu_id", unsigned: true })
  spuId: number;
}
