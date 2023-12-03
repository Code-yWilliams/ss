export enum Environment {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export interface IConfig {
  environment: Environment;
}

export interface IUser {
  id: number;
  email: string;
}
