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

export interface LoginParams {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignupParams {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
