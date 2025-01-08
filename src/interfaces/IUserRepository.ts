import { IUser } from "./IUser";

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  create(user: IUser): Promise<IUser>;
  update(id: string, user: IUser): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}
