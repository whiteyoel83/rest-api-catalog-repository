import { UserDalMongoDB } from "./mongodb/userDalMongo";
import { UserDalSQLite } from "./sqlite/userDalSQLite";
import { UserDalMysql } from "./mysql/userDalMysql";
import { UserDalPostgres } from "./postgresql/userDalPostgresql";
import { UserDalMock } from "./mock/userDalMock";
import { DriversDB } from "../enums/drivers";
import { Config } from "../config/config";

export class UserDal {
  static async loginUsername({ username, password }: any) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async loginEmail({ email, password }: any) {
    try {
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
    } catch (error) {
      return error;
    }
  }
  static async loginPhone({ phone, password }: any) {
    try {
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
      return await userDal.loginPhone({ phone, password });
    } catch (error) {
      return error;
    }
  }

  static async logout({ token }: any) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async getById(id: string) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async getByEmail(email: string) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async getByPhone(phone: string) {
    try {
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
      return await userDal.getByPhone(phone);
    } catch (error) {
      return error;
    }
  }

  static async getByUsername(username: string) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async create(user: any) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async updated(id: string, user: any) {
    try {
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
      return await userDal.updated(id, user);
    } catch (error) {
      return error;
    }
  }

  static async delete(id: string) {
    try {
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
      return await userDal.delete(id);
    } catch (error) {
      return error;
    }
  }

  static async getAll() {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async getAllWithPaginate(page: number, limit: number) {
    try {
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
    } catch (error) {
      return error;
    }
  }

  static async getAllWithFilters(filters: any) {
    try {
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
      return await userDal.getAllWithFilters(filters);
    } catch (error) {
      return error;
    }
  }
}
