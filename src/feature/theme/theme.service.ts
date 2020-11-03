import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Theme } from '../../entity/Theme';

@Injectable()
export class ThemeService {
  constructor(
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
  ) {}
  async findByNames(names: string[]) {
    const lists = await this.themeRepository
      .createQueryBuilder('theme')
      .where('theme.name IN (:...names)', { names })
      .getMany();

    return lists;
  }
  async findByNameWithSpu(name: string) {
    const themeWithSpu = await this.themeRepository.findOne({
      relations: ['spu_list'],
      where: { name },
    });
    return themeWithSpu;
  }
}
