import { makeAutoObservable } from "mobx";
import RootStore from "@stores/RootStore";
import User from "./User";
import { IUser } from "@typings/shared";

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
}

export default UserStore;
