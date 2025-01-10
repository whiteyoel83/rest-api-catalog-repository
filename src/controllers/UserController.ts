import { CATALOG } from "../const/catalog";
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

  async getAllWithPaginate(req: any, res: any): Promise<any> {
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
  }

  async getAllWithFilters(req: any, res: any): Promise<any> {
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
  }

  create(req: any, res: any): any {
    try {
      const user = req.body;
      const newUser = this.userRepository.create(user);
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
  }
}
