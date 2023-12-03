import UserStore from "../UserStore";
import Config from "./Config";

class RootStore {
  config: Config;
  userStore: UserStore;

  constructor() {
    this.config = new Config(this);
    this.userStore = new UserStore(this);
  }
}

export default RootStore;
