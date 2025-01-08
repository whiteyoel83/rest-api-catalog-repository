import { UserDalMongoDB } from "./mongodb/userDalMongo";
import { UserDalSQLite } from "./sqlite/userDalSQLite";
import { UserDalMysql } from "./mysql/userDalMysql";
import { UserDalPostgres } from "./postgresql/userDalPostgresql";
import { UserDalMock } from "./mock/userDalMock";
import { DriversDB } from "../enums/drivers";
import { Config } from "../config/config";

export class UserDal {
  static async loginUsername({ username, password }: any) {
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

  static async loginEmail({ email, password }: any) {
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

  static async logout({ token }: any) {
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

  static async getUserById(id: string) {
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

  static async getUserByEmail(email: string) {
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

  static async getUserByUsername(username: string) {
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

  static async register(user: any) {
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
}
