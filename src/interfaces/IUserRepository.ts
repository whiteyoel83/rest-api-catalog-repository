import { IUser } from "./IUser";

export interface IUserRepository {
  getById(id: string): Promise<IUser | null>;
  getByEmail(email: string): Promise<IUser | null>;
  getByUsername(username: string): Promise<IUser | null>;
  getByPhone(phone: string): Promise<IUser | null>;
  getAll(): Promise<IUser[]>;
  getAllWithPaginate(page: number, limit: number): Promise<IUser[]>;
  getAllWithFilters(filters: any): Promise<IUser[]>;
  create(user: IUser): Promise<IUser | null>;
  update(id: string, user: IUser): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
  loginUsername({ username, password }: any): Promise<IUser | null>;
  loginEmail({ email, password }: any): Promise<IUser | null>;
  loginPhone({ phone, password }: any): Promise<IUser | null>;
  logout({ token }: any): Promise<boolean>;
}

export interface IUserRepositoryStatic {
  new (): IUserRepository;
  getInstance(): IUserRepository;
}
