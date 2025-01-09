import { UserDalMongoDB } from "./mongodb/userDalMongo";
import { UserDalSQLite } from "./sqlite/userDalSQLite";
import { UserDalMysql } from "./mysql/userDalMysql";
import { UserDalPostgres } from "./postgresql/userDalPostgresql";
import { UserDalMock } from "./mock/userDalMock";
import { DriversDB } from "../enums/drivers";
import { Config } from "../config/config";

export class UserDal {
  async loginUsername({ username, password }: any) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.loginUsername({ username, password });
  }

  async loginEmail({ email, password }: any) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.loginEmail({ email, password });
  }

  async logout({ token }: any) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.logout({ token });
  }

  async getUserById(id: string) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.getUserById(id);
  }

  async getUserByEmail(email: string) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.getUserByEmail(email);
  }

  async getUserByUsername(username: string) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.getUserByUsername(username);
  }

  async register(user: any) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.register(user);
  }
  async getAll() {
    console.log("findAll from Dal");
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.getAll();
  }

  async getAllWithPaginate(page: number, limit: number) {
    let userDal: any;
    switch (Config.DBDRIVER) {
      case DriversDB.MONGODB:
        userDal = UserDalMongoDB;
        break;
      case DriversDB.SQLITE:
        userDal = UserDalSQLite;
        break;
      case DriversDB.MYSQL:
        userDal = UserDalMysql;
        break;
      case DriversDB.POSTGRES:
        userDal = UserDalPostgres;
        break;
      default:
        userDal = UserDalMock;
        break;
    }
    return await userDal.getAllWithPaginate(page, limit);
  }
}
