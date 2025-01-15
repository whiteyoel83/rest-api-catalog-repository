import { Config } from "../config/config";
import { CATALOG } from "../const/catalog";
import { IProfile } from "../interfaces/IProfile";
import { AuthRepository } from "../repositories/AuthRepository";
import { serviceResponse } from "../utils/serviceResponse";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthController {
  readonly authRepository = AuthRepository.getInstance();

  create = async (req: any, res: any): Promise<any> => {
    try {
      const { email, password, username } = req.body;
      if (!email || !password || !username) {
        return serviceResponse.badRequest(
          res,
          "Missing email, password or username",
          null
        );
      }

      const userDB = await this.authRepository.getByEmail(email);
      if (userDB) {
        return serviceResponse.conflict(res, "Email already exists", null);
      }

      const newUser = await this.authRepository.register(
        username,
        email,
        bcrypt.hashSync(password, 10)
        //   phone: req.body.phone,
        //   "2faEnable": false,
        //   "2faSecret": "",
      );

      return serviceResponse.created(res, "Register successful", newUser);
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  login = async (req: any, res: any): Promise<any> => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return serviceResponse.badRequest(
          res,
          "Missing email or password",
          null
        );
      }
      const userDB = await this.authRepository.getByEmail(email);
      if (!userDB) {
        return serviceResponse.unauthorized(
          res,
          "Email or password invalid",
          null
        );
      }

      const passwordMatch = await bcrypt.compare(password, userDB.password);
      if (!passwordMatch) {
        return serviceResponse.unauthorized(
          res,
          "Email or password invalid",
          null
        );
      }
      const acccessToken = jwt.sign({ id: userDB.id }, Config.JWT_TOKEN_KEY, {
        subject: "accessToApiForUser",
        expiresIn: "1h",
      });

      return serviceResponse.ok(res, "Login successful", {
        id: userDB.id,
        username: userDB.username,
        email: userDB.email,
        phone: userDB.phone,
        accessToken: acccessToken,
      });

      //const newUser = await this.authRepository.loginEmail(email, password);
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  current = async (req: Request, res: Response) => {
    try {
      return serviceResponse.accepted(res, "Accepted", null);
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };
}
