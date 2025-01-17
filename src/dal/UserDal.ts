import { UserDalMongoDB } from "./mongodb/userDalMongo";
import { UserDalSQLite } from "./sqlite/userDalSQLite";
import { UserDalMysql } from "./mysql/userDalMysql";
import { UserDalPostgres } from "./postgresql/userDalPostgresql";
import { UserDalMock } from "./mock/userDalMock";
import { DriversDB } from "../enums/drivers";
import { Config } from "../config/config";

export class UserDal {
  static async loginUsername(username: string, password: string) {
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

  static async loginEmail(email: string, password: string) {
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
  static async loginPhone(phone: string, password: string) {
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

  static async logout(token: string) {
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
      return await userDal.getById(id);
    } catch (error) {
      return error;
    }
  }

  static async getRefreshToken(refreshToken: string, userId: string) {
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
      return await userDal.getRefreshToken(refreshToken, userId);
    } catch (error) {
      return error;
    }
  }

  static async getInvalidToken(accessToken: string) {
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
      return await userDal.getInvalidToken(accessToken);
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
      return await userDal.getByEmail(email);
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
      return await userDal.create(user);
    } catch (error) {
      return error;
    }
  }

  static async createRefreshToken(userId: string, refreshToken: string) {
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
      return await userDal.createRefreshToken(userId, refreshToken);
    } catch (error) {
      return error;
    }
  }

  static async createInvalidTokens(
    accessToken: string,
    userId: string,
    expirationTime: string
  ) {
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
      return await userDal.createInvalidTokens(
        accessToken,
        userId,
        expirationTime
      );
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

  static async update2factorAuthentication(id: string, secret: string) {
    try {
      let userDal: any;
      switch (Config.DBDRIVER) {
        case DriversDB.MONGODB:
          userDal = UserDalMongoDB;
          break;
        case DriversDB.SQLITE:
          userDal = UserDalSQLite;
          break;
        default:
          userDal = UserDalMock;
          break;
      }
      return await userDal.update2factorAuthentication(id, secret);
    } catch (error) {
      return error;
    }
  }

  static async update2factorAuthenticationEnable(id: string) {
    try {
      let userDal: any;
      switch (Config.DBDRIVER) {
        case DriversDB.MONGODB:
          userDal = UserDalMongoDB;
          break;
        case DriversDB.SQLITE:
          userDal = UserDalSQLite;
          break;
        default:
          userDal = UserDalMock;
          break;
      }
      return await userDal.update2factorAuthenticationEnable(id);
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

  static async deleteRefreshTokenById(userId: string) {
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
      return await userDal.deleteRefreshTokenById(userId);
    } catch (error) {
      return error;
    }
  }

  static async deleteRefreshTokenByToken(token: string) {
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
      return await userDal.deleteRefreshTokenByToken(token);
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
