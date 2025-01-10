import { CATALOG } from "../const/catalog";
import { IUser } from "../interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";
import { serviceResponse } from "../utils/serviceResponse";

export class UserController {
  readonly userRepository = UserRepository.getInstance();

  //use the arrow function
  getAll = async (req: any, res: any): Promise<any> => {
    try {
      const users = await this.userRepository.getAll();
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_ALL_SUCCESS,
        users
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getAllWithPaginate = async (req: any, res: any): Promise<any> => {
    try {
      let users: any[] = [];
      users = await this.userRepository.getAllWithPaginate(
        req.query.page,
        req.query.limit
      );
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_ALL_SUCCESS,
        users
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getAllWithFilters = async (req: any, res: any): Promise<any> => {
    try {
      let users: any[] = [];
      console.log("req.query.filters", req.query.filters);
      users = await this.userRepository.getAllWithFilters(req.query.filters);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_ALL_SUCCESS,
        users
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  create = async (req: any, res: any): Promise<any> => {
    try {
      const user: IUser = {
        id: crypto.randomUUID(),
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        phone: req.body.phone,
      };
      const newUser = await this.userRepository.create(user);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.CREATED_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  update = async (req: any, res: any): Promise<any> => {
    try {
      const id = req.params.id;
      const user: IUser = {
        id: crypto.randomUUID(),
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        phone: req.body.phone,
      };
      const newUser = await this.userRepository.update(id, user);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.UPDATED_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  delete = async (req: any, res: any): Promise<any> => {
    try {
      const id = req.params.id;
      const newUser = await this.userRepository.delete(id);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.DELETED_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getById = async (req: any, res: any): Promise<any> => {
    try {
      const id = req.params.id;
      const newUser = await this.userRepository.getById(id);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_BY_ID_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getByEmail = async (req: any, res: any): Promise<any> => {
    try {
      const email = req.params.email;
      const newUser = await this.userRepository.getByEmail(email);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_BY_EMAIL_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getByUsername = async (req: any, res: any): Promise<any> => {
    try {
      const username = req.params.username;
      const newUser = await this.userRepository.getByUsername(username);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_BY_EMAIL_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  getByPhone = async (req: any, res: any): Promise<any> => {
    try {
      const phone = req.params.phone;
      const newUser = await this.userRepository.getByPhone(phone);
      return serviceResponse.ok(
        res,
        CATALOG.USERS.MESSAGES.GET_BY_EMAIL_SUCCESS,
        newUser
      );
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  async loginEmail(req: any, res: any): Promise<any> {
    return null;
  }

  async loginUsername(req: any, res: any): Promise<any> {
    return null;
  }

  async loginPhone(req: any, res: any): Promise<any> {
    return null;
  }

  async loginToken(req: any, res: any): Promise<any> {
    return null;
  }

  async logout(req: any, res: any): Promise<any> {
    return null;
  }
}
