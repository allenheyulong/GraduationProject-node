import { Controller, Get, Param } from '@nestjs/common';
import { BannerService } from './banner.service';
import { _httpException } from '../../core/exception/_http.exception';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}
  // 测试路由
  @Get()
  async getAll() {
    return this.bannerService.findAll();
  }
  @Get('name/:name')
  //XXX: 如何解析路由参数？
  //~：https://docs.nestjs.com/controllers#route-parameters
  //XXX: 还可以通过@Query注解进行，那么这种的请求url是怎样的？
  //~： 例如： /name?name="supengyu"
  // ： 那么就需要通过@Query name 直接就可以拿到name对应的值
  async getName(@Param() params) {
    const name = params.name;
    console.log(`路由参数为:`, params);
    const banner = await this.bannerService.getByName(name);
    if (!banner) {
      //XXX: 如何定义指定的http错误状态码？
      //~:https://docs.nestjs.com/exception-filters#custom-exceptions
      // 可以使用内建HttpException https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      // return new NotFoundException();
      // 但是由于其太多命名... 以及为了保证项目的灵活性，通常会自定义http错误处理。
      // XXX:这里不能用 return 一个错误信息，否则会将错误信息加入到 报文中的response 中。 这是由于全局异常处理导致的？
      throw new _httpException({
        message: '没有找到指定的banner数据',
      });
    }
    return banner;
  }
}
