import { IProfile } from "./IProfile";

export interface IAuthRepository {
  loginEmail(email: string, password: string): Promise<any | null>;
  loginUsername(username: string, password: string): Promise<any | null>;
  loginPhone(phone: string, password: string): Promise<any | null>;
  getByEmail(email: string): Promise<any | null>;
  getByUsername(username: string): Promise<any | null>;
  getByPhone(phone: string): Promise<any | null>;
  register(
    username: string,
    email: string,
    password: string
  ): Promise<any | null>;
  profile(id: string): Promise<any | null>;
  logout(token: string): Promise<boolean>;
}

export interface IAuthRepositoryStatic {
  new (): IAuthRepository;
  getInstance(): IAuthRepository;
}
