import { IUser } from "./IUser";

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findAll(): any;
  create(user: IUser): Promise<IUser>;
  update(id: string, user: IUser): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}
