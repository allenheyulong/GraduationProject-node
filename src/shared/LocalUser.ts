import { User } from '../entity/User';

export class LocalUser {
  private static user: User = null;
  public static getUser() {
    return LocalUser.user;
  }
  public static setUser(user: User) {
    LocalUser.user = user;
  }
  public static getUserID() {
    if (LocalUser.user) {
      return LocalUser.user.id;
    }
  }
}
