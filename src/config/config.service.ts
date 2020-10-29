import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import * as Joi from '@hapi/joi';


type EnvConfig = Record<string, string>

@Injectable()
export class ConfigService {
  // TODO: Record 是什么意思？ < , > 又是什么语法？
  private readonly envConfig: EnvConfig;

  /**
   * - 默认读取filePath中设置的env文件
   *
   * - 对env文件进行校验
   *
   * @param filePath env的文件路径
   */
  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * - 确保所有设置的env文件都是经过校验的
   *
   * - 如果校验失败，会抛出错误终止程序
   *
   * @param envConfig
   * @private
   */
  private validateInput(envConfig): EnvConfig {
    // 创建校验规则
    // TODO: 默认会对所有的对象进行检查...
    // TODO: joi库？以及基础校验env使用
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      TYPE: Joi.string().valid('mysql'),
      HOST: Joi.string().valid('localhost'),
      PORT: Joi.number().default(3306),
      USERNAME: Joi.string().default('root'),
      PASSWORD: Joi.string().default('root'),
      DATABASE: Joi.string().default('test'),
      ENTITIES: Joi.array().default([]),
      SYNCHRONIZE: Joi.bool().default(true),

    });
    // 进行校验
    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`环境变量校验失败，原因： ${error.message}`);
    }
    return envConfig;
  };

  get(key: string): string {
    return this.envConfig[key];
  }
  /**
   * 官方test 据说是可以直接通过config.isApiAuthEnabled
   */
  get isApiAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }
}
