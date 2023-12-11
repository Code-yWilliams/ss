import UserStore from ".";
import { IUser } from "@typings/shared";

class User {
  id: number;
  email: string;
  store: UserStore;

  constructor(userStore: UserStore, user: IUser) {
    this.store = userStore;
    this.id = user.id;
    this.email = user.email;
  }
}

export default User;
