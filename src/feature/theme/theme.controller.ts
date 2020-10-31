import {Controller, Get, Query} from '@nestjs/common';
import {ThemeService} from "./theme.service";
import {ThemeParseNamePipe} from "../../core/pipes/theme-parse-name.pipe";
import {themeListsVO} from "../../vo/themeListsVO";
import {dbResIntoVo} from "../../tools/dbResIntoVo";


@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {
  }

  /**
   * - 支持前端批量获取theme
   *
   * - [x] 使用管道对入参names进行处理
   *
   * - [x] 使用 themeListsVO 对 返回结果进行修饰
   *
   * @param names
   */
  @Get('by/names')
  async getThemeGroupByNames(@Query("names", ThemeParseNamePipe) names: string []) {
    let themeLists = await this.themeService.findByNames(names);
    themeLists = dbResIntoVo(themeListsVO as [], themeLists as [])
    return themeLists;
  }
}
