import Base from "@lib/api/Base";

class Users extends Base {
  static async login({
    email,
    password,
    remember,
  }: {
    email: string;
    password: string;
    remember: boolean;
  }) {
    return this.post("/sessions", {
      user: { email, password, remember },
    });
  }
}

export default Users;
