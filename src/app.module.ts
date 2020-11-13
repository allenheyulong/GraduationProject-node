import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Connection } from 'typeorm';
import { BannerModule } from './feature/banner/banner.module';
import { ThemeModule } from './feature/theme/theme.module';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { GridCategoryModule } from './feature/grid-category/grid-category.module';
import { ActivityModule } from './feature/activity/activity.module';
import { SpuModule } from './feature/spu/spu.module';
import { CategoryModule } from './feature/category/category.module';
import { CouponModule } from './feature/coupon/coupon.module';
import { AuthModule } from './feature/auth/auth.module';

@Module({
  imports: [
    TypeOrmCoreModule.forRoot({
      namingStrategy: new SnakeNamingStrategy(), // 小驼峰 -> 蛇形命名法
    }),
    ConfigModule,
    BannerModule,
    ThemeModule,
    GridCategoryModule,
    ActivityModule,
    SpuModule,
    CategoryModule,
    CouponModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [LoggerMiddleware];
    consumer.apply(...middlewares).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
