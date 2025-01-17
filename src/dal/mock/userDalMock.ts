const list: any[] = require("./users.json");
const userRefreshTokens: any[] = [];
const userInvalidTokens: any[] = [];

export class UserDalMock {
  static getAll() {
    try {
      return list;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static getAllWithPaginate(page: number, limit: number) {
    try {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      return list.slice(startIndex, endIndex);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static getAllWithFilters(filters: any) {
    try {
      return list;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  static getById(id: string) {
    try {
      const index = list.findIndex((element: any) => element.id === id);

      if (index === -1) {
        console.error("invalid index:" + index);
        return null;
      }

      return list[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getRefreshToken(refreshToken: string, userId: string) {
    try {
      const index = userRefreshTokens.findIndex(
        (user: any) =>
          user.refreshToken === refreshToken && user.userId === userId
      );

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      return userRefreshTokens[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static create(element: any) {
    try {
      const newElement: any = {
        id: crypto.randomUUID(),
        "2fEnable": false,
        "2fSecret": "",
        ...element,
      };

      list.push(newElement);
      return newElement;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async createRefreshToken(userId: string, refreshToken: string) {
    try {
      userRefreshTokens.push({
        refreshToken,
        userId,
      });
      return true;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async update(id: string, element: any) {
    try {
      const index = list.findIndex((user: any) => user.id === id);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      const updatedUser = {
        ...list[index],
        ...element,
      };

      list[index] = updatedUser;

      return list[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async delete(id: string) {
    try {
      const index = list.findIndex((user: any) => user.id === id);
      if (index === -1) {
        console.error("invalid index" + index);
        return false;
      }
      list.splice(index, 1);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async deleteRefreshToken(userId: string) {
    try {
      const index = userRefreshTokens.findIndex(
        (user: any) => user.userId === userId
      );

      if (index === -1) {
        console.error("invalid index" + index);
        return false;
      }

      userRefreshTokens.splice(index, 1);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getByEmail(email: string) {
    try {
      const index = list.findIndex((element: any) => element.email === email);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      return list[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getByUsername(username: string) {
    try {
      const index = list.findIndex((user: any) => user.username === username);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      return list[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getByPhone(phone: string) {
    try {
      const index = list.findIndex((element: any) => element.phone === phone);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      return list[index];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async loginUsername({ username, password }: any) {
    try {
      const index = list.findIndex((user: any) => user.username === username);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      const user = list[index];

      if (user.password !== password) {
        console.error("invalid password");
        return null;
      }

      return user;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async loginEmail({ email, password }: any) {
    try {
      const userIndex = list.findIndex((user: any) => user.email === email);

      if (userIndex === -1) {
        console.error("invalid index" + userIndex);
        return null;
      }

      const user = list[userIndex];

      if (user.password !== password) {
        console.error("invalid password");
        return null;
      }

      return user;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async loginPhone({ phone, password }: any) {
    try {
      const index = list.findIndex((user: any) => user.phone === phone);

      if (index === -1) {
        console.error("invalid index" + index);
        return null;
      }

      const user = list[index];

      if (user.password !== password) {
        console.error("invalid password");
        return null;
      }

      return user;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async logout({ token }: any) {
    try {
      const index = list.findIndex((user: any) => user.token === token);

      if (index === -1) {
        console.error("invalid index" + index);
        return false;
      }

      list.splice(index, 1);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
