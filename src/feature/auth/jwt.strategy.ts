import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtPayload } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../entity/User';
import { LocalUser } from '../../shared/LocalUser';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   *
   */
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'thesecret',
    });
  }

  /**
   * 守卫调用的函数（但是在次之前，jwt会进行token的解密操作，我不知道哪里做的。。。）
   * @param payload
   */
  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user = await this.userRepository.findOne({ nickname: username });
    if (!user) {
      throw new UnauthorizedException();
    } else {
      //  将此次访问接口的用户信息保存起来，节省一次数据库查询（通常带权限的接口后面还需要用户信息）
      LocalUser.setUser(user);
    }
    return user;
  }
}
