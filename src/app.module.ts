import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Connection } from 'typeorm';
import { BannerModule } from './feature/banner/banner.module';
import { ThemeModule } from './feature/theme/theme.module';


@Module({
  imports: [TypeOrmCoreModule.forRoot({
    namingStrategy: new SnakeNamingStrategy() // 小驼峰 -> 蛇形命名法
  }), ConfigModule, BannerModule, ThemeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
