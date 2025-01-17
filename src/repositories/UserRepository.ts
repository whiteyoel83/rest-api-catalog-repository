// UserRepository.ts

import { IUserRepository } from "../interfaces/IUserRepository";
import { UserService } from "../services/UserService"; // Assume a database service exists
import { IUser } from "../interfaces/IUser";
import { UserDal } from "../dal/UserDal";

export class UserRepository implements IUserRepository {
  private static instance: UserRepository;

  //Bind this in the Constructor
  constructor() {
    this.getAllWithFilters = this.getAllWithFilters.bind(this);
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  async getById(id: string): Promise<any> {
    try {
      const user = await UserDal.getById(id);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getRefreshToken(refreshToken: string, userId: string): Promise<any> {
    try {
      const userRefreshToken = await UserDal.getRefreshToken(
        refreshToken,
        userId
      );
      return userRefreshToken;
    } catch (error) {
      return null;
    }
  }

  async getInvalidToken(accessToken: string): Promise<any> {
    try {
      const userInvalidToken = await UserDal.getInvalidToken(accessToken);
      return userInvalidToken;
    } catch (error) {
      return null;
    }
  }

  async getByEmail(email: string): Promise<any> {
    try {
      const user = await UserDal.getByEmail(email);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getByUsername(username: string): Promise<any> {
    try {
      const user = await UserDal.getByUsername(username);
      return user;
    } catch (error) {
      return null;
    }
  }
  async getByPhone(phone: string): Promise<any> {
    try {
      const user = await UserDal.getByPhone(phone);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getAll(): Promise<any[]> {
    try {
      let users: any[] = [];
      users = await UserDal.getAll();
      return users;
    } catch (error) {
      return [];
    }
  }

  async getAllWithPaginate(page: number, limit: number): Promise<IUser[]> {
    try {
      let users: any[] = [];
      users = await UserDal.getAllWithPaginate(page, limit);
      return users;
    } catch (error) {
      return [];
    }
  }

  async getAllWithFilters(filters: any): Promise<IUser[]> {
    try {
      let users: any[] = [];
      const filter: any = filters;
      console.log("filter", filter);
      users = await UserDal.getAllWithFilters(filter);
      return users;
    } catch (error) {
      return [];
    }
  }

  async create(user: IUser): Promise<IUser | null> {
    try {
      const newUser = await UserDal.create(user);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async createRefreshToken(userId: string, refreshToken: string): Promise<any> {
    try {
      const newUser = await UserDal.createRefreshToken(userId, refreshToken);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async createInvalidTokens(
    accessToken: string,
    userId: string,
    expirationTime: string
  ) {
    try {
      const newUser = await UserDal.createInvalidTokens(
        accessToken,
        userId,
        expirationTime
      );
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    try {
      const newUser = await UserDal.updated(id, user);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async update2factorAuthentication(id: string, secret: string): Promise<any> {
    try {
      const newUser = await UserDal.update2factorAuthentication(id, secret);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async update2factorAuthenticationEnable(id: string): Promise<any> {
    try {
      const newUser = await UserDal.update2factorAuthenticationEnable(id);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await UserDal.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteRefreshTokenById(userId: string): Promise<boolean> {
    try {
      await UserDal.deleteRefreshTokenById(userId);
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteRefreshTokenByToken(token: string): Promise<boolean> {
    try {
      await UserDal.deleteRefreshTokenByToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}
