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

  async update(id: string, user: IUser): Promise<IUser | null> {
    try {
      const newUser = await UserDal.updated(id, user);
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
}
