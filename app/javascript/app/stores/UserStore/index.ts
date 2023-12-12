import { makeAutoObservable } from "mobx";
import RootStore from "@stores/RootStore";
import Users from "@api/Users";
import User from "./User";
import { IUser, LoginParams } from "@typings/shared";

class UserStore {
  rootStore: RootStore;
  id: number | null = null;
  email: string | null = null;
  user: User | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.user = new User(this, user);
  }

  login = async ({ email, password, remember }: LoginParams) => {
    try {
      const { data } = await Users.login({ email, password, remember });
      const { user } = data;
      this.setUser(user);
    } catch (e) {}
  };
}

export default UserStore;
