import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //TODO: 提取公共配置文件中
  app.setGlobalPrefix('/v1');
  await app.listen(9223);
}
bootstrap();
