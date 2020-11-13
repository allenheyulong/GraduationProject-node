import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entity/User';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { _httpException } from '../../core/exception/_http.exception';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    // FIXME: 没有对用户进行去重
    const user = new User();
    user.openid = await bcrypt.genSalt();
    // 拿到一个salt
    // ！！！ 注意，这里拿openID 代替salt 方便进行解密操作
    user.nickname = username;
    user.password = await this.hashPassword(password, user.openid);
    try {
      const dbRes = await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new _httpException({
          message: '用户已存在',
        });
      } else {
        throw new _httpException({
          message: '数据库存储用户出错',
        });
      }
    }
  }
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({
      where: [{ nickname: username }],
    });
    // 如果用户存在，并且解密成功，则返回用户名称

    if (user && (await user.validatePassword(password))) {
      return user.nickname;
    } else {
      return null;
    }
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
