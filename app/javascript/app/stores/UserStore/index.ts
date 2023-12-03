import { makeAutoObservable } from "mobx";
import RootStore from "@stores/RootStore";
import { IUser } from "@typings/shared";

class UserStore {
  rootStore: RootStore;
  id: number | null = null;
  email: string | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.id = user.id;
    this.email = user.email;
  }
}

export default UserStore;
