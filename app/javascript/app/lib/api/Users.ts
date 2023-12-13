import Base from "@lib/api/Base";
import { LoginParams, SignupParams } from "@app/typings/shared";

class Users extends Base {
  static async login({ email, password, remember }: LoginParams) {
    return this.post("/sessions", {
      user: { email, password, remember },
    });
  }

  static async signup({
    firstName,
    lastName,
    phone,
    email,
    password,
    passwordConfirmation,
  }: SignupParams) {
    return this.post("/users", {
      user: {
        firstName,
        lastName,
        phone,
        email,
        password,
        passwordConfirmation,
      },
    });
  }
}

export default Users;
