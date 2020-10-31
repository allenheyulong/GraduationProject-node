import { Module } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Theme} from "../../entity/Theme";

@Module({
  imports: [TypeOrmModule.forFeature([Theme])],
  providers: [ThemeService],
  controllers: [ThemeController]
})
export class ThemeModule {}
