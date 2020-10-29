import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class TestconfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.getValue('HOST'),
      port: parseInt(this.getValue('PORT')),
      username: this.getValue('USERNAME'),
      password: this.getValue('PASSWORD'),
      database: this.getValue('DATABASE'),

      ssl: this.isProduction(),
    };
  }
}

const configService = new TestconfigService(process.env).ensureValues([
  'HOST',
  'PORT',
  'USERNAME',
  'PASSWORD',
  'DATABASE',
]);

export { configService };
