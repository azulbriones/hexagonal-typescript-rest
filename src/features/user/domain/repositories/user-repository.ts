import { UserModel } from "../models/user-model";

export interface UserRepository {
  createUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserModel | null>;

  getAllUsers(): Promise<UserModel[]>;
}
