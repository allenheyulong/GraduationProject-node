import { Category } from '../entity/Category';

export interface pureCategory {
  id: number;
  name: string;
  img: string;
  parentId: number;
  index: number;
}

export class CategoryAllListsVO {
  roots = [];
  subs = [];
  constructor(categories: Category[]) {
    this._init(categories);
  }
  static generatePureCategory(category: Category): pureCategory {
    return {
      id: category.id,
      name: category.name,
      img: category.img,
      parentId: category.parentId,
      index: category.index,
    };
  }

  private _init(categories) {
    categories.forEach(category => {
      if (category.isRoot) {
        this.roots.push(CategoryAllListsVO.generatePureCategory(category));
      } else {
        this.subs.push(CategoryAllListsVO.generatePureCategory(category));
      }
    });
    //  XXX: 补充一下数据库查询的弱技能，只能手动排序了
    this.roots.sort((a, b) => a.index - b.index);
  }
}
