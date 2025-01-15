import { IUser } from "./IUser";

export interface IUserRepository {
  getById(id: string): Promise<IUser | null>;
  getAll(): Promise<IUser[]>;
  getAllWithPaginate(page: number, limit: number): Promise<IUser[]>;
  getAllWithFilters(filters: any): Promise<IUser[]>;
  create(user: IUser): Promise<IUser | null>;
  update(id: string, user: IUser): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}

export interface IUserRepositoryStatic {
  new (): IUserRepository;
  getInstance(): IUserRepository;
}
