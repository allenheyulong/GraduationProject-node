import { Column } from 'typeorm';

export class BaseEntity {
  // XXX: typeORM 如何拥有 JPA  @JsonIgnore 这样的注解函数？
  // ~: 使用 select 即可忽略
  @Column('datetime',{nullable: true,select: false})
  create_time: Date;
  @Column('datetime',{nullable: true,select: false})
  update_time: Date;
  @Column("datetime",{nullable: true,select: false})
  delete_time: Date;
}
