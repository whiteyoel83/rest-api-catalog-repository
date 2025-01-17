// UserRepository.ts

import { UserDal } from "../dal/UserDal";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUser } from "../interfaces/IUser";

export class AuthRepository implements IAuthRepository {
  private static instance: AuthRepository;

  static getInstance(): AuthRepository {
    if (!AuthRepository.instance) {
      AuthRepository.instance = new AuthRepository();
    }
    return AuthRepository.instance;
  }

  async loginEmail(email: string, password: string): Promise<any | null> {
    try {
      const newUser = await UserDal.loginEmail(email, password);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async loginUsername(username: string, password: string): Promise<any | null> {
    try {
      const newUser = await UserDal.loginUsername(username, password);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async loginPhone(phone: string, password: string): Promise<any | null> {
    try {
      const newUser = await UserDal.loginPhone(phone, password);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<any | null> {
    try {
      const newUser = await UserDal.create({ username, email, password });
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async getById(id: string): Promise<any | null> {
    try {
      const user = await UserDal.getById(id);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getByEmail(email: string): Promise<any | null> {
    try {
      const user = await UserDal.getByEmail(email);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getByUsername(username: string): Promise<any | null> {
    try {
      const user = await UserDal.getByUsername(username);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getByPhone(phone: string): Promise<any | null> {
    try {
      const user = await UserDal.getByPhone(phone);
      return user;
    } catch (error) {
      return null;
    }
  }

  async profile(id: string): Promise<any | null> {
    return null;
  }

  async logout(token: string): Promise<boolean> {
    return true;
  }
}
