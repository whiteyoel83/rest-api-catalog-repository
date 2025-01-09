import { CATALOG } from "../const/catalog";
import { UserRepository } from "../repository/UserRepository";
import { serviceResponse } from "../utils/serviceResponse";

export class UserController {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async findAll(req: any, res: any) {
    try {
      const users = await this.repository.findAll();
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
}
