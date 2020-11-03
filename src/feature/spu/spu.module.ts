import { Module } from '@nestjs/common';
import { SpuController } from './spu.controller';
import { SpuService } from './spu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spu } from '../../entity/Spu';

@Module({
  imports: [TypeOrmModule.forFeature([Spu])],
  controllers: [SpuController],
  providers: [SpuService],
})
export class SpuModule {}
