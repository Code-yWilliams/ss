import RootStore from "./index";
import { Environment, IConfig } from "@app/typings/shared";

class Config {
  rootStore: RootStore;
  environment: Environment;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  setConfig = (config: IConfig) => {
    this.environment = config.environment;
  };
}

export default Config;
