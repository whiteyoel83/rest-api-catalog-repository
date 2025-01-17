import { Config } from "../config/config";
import { CATALOG } from "../const/catalog";
import {} from "../interfaces/IProfile";
import { AuthRepository } from "../repositories/AuthRepository";
import { serviceResponse } from "../utils/serviceResponse";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { authenticator } = require("otplib");
import qrcode from "qrcode";
import nodeCache from "node-cache";
import { UserRepository } from "../repositories/UserRepository";

const cache = new nodeCache();

export class AuthController {
  readonly authRepository = AuthRepository.getInstance();
  readonly userRepository = UserRepository.getInstance();

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
      );

      return serviceResponse.created(res, "Register successful", newUser.id);
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
        return serviceResponse.unprocessableEntity(
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
      if (userDB["2faEnable"]) {
        const tempToken = crypto.randomUUID();

        cache.set(
          Config.CACHE_TEMPORARY_TOKEN_PREFIX + tempToken,
          userDB._id,
          Config.CACHE_TEMPORARY_TOKEN_EXPIRES_IN_SECONDS
        );

        return res.status(200).json({
          tempToken,
          expiresInSeconds: Config.CACHE_TEMPORARY_TOKEN_EXPIRES_IN_SECONDS,
        });
      } else {
        const acccessToken = jwt.sign(
          { id: userDB.id },
          Config.ACCESS_TOKEN_SECRET,
          {
            subject: "accessToApiForUser",
            expiresIn: "1h",
          }
        );

        return serviceResponse.ok(res, "Login successful", {
          id: userDB.id,
          username: userDB.username,
          email: userDB.email,
          phone: userDB.phone,
          accessToken: acccessToken,
        });
      }
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };

  login2factorAuthentication = async (req: any, res: any): Promise<any> => {
    try {
      const { tempToken, totp } = req.body;

      if (!tempToken || !totp) {
        return res
          .status(422)
          .json({ message: "Please fill in all fields (tempToken and totp)" });
      }

      const userId = cache.get(Config.CACHE_TEMPORARY_TOKEN_PREFIX + tempToken);

      if (!userId) {
        return res.status(401).json({
          message: "The provided temporary token is incorrect or expired",
        });
      }

      const user = await this.userRepository.getById(userId.toString());

      const verified = authenticator.check(totp, user["2faSecret"]);

      if (!verified) {
        return res
          .status(401)
          .json({ message: "The provided TOTP is incorrect or expired" });
      }

      const accessToken = jwt.sign(
        { userId: user.id },
        Config.ACCESS_TOKEN_SECRET,
        { subject: "accessApi", expiresIn: Config.ACCESS_TOKEN_EXPIRES_IN }
      );

      const refreshToken = jwt.sign(
        { userId: user.id },
        Config.REFRESH_TOKEN_SECRET,
        { subject: "refreshToken", expiresIn: Config.REFRESH_TOKEN_EXPIRES_IN }
      );

      const isUserRefreshTokenCreated =
        await this.userRepository.createRefreshToken(user._id, refreshToken);

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.log(error);
      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
  };

  refreshToken = async (req: any, res: any): Promise<any> => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token not found" });
      }

      const decodedRefreshToken: any = jwt.verify(
        refreshToken,
        Config.REFRESH_TOKEN_SECRET
      );

      const userRefreshToken = await this.userRepository.getRefreshToken(
        refreshToken,
        decodedRefreshToken.id
      );

      if (!userRefreshToken) {
        return res
          .status(401)
          .json({ message: "Refresh token invalid or expired" });
      }

      await this.userRepository.deleteRefreshToken(decodedRefreshToken.id);

      const accessToken = jwt.sign(
        { userId: decodedRefreshToken.userId },
        Config.ACCESS_TOKEN_SECRET,
        { subject: "accessApi", expiresIn: Config.ACCESS_TOKEN_EXPIRES_IN }
      );

      const newRefreshToken = jwt.sign(
        { userId: decodedRefreshToken.userId },
        Config.REFRESH_TOKEN_SECRET,
        { subject: "refreshToken", expiresIn: Config.REFRESH_TOKEN_EXPIRES_IN }
      );

      const isUserRefreshTokenCreated =
        await this.userRepository.createRefreshToken(
          decodedRefreshToken.id,
          decodedRefreshToken
        );

      return res.status(200).json({
        accessToken,
        refreshToken: newRefreshToken,
      });
    } catch (error) {
      if (
        error instanceof jwt.TokenExpiredError ||
        error instanceof jwt.JsonWebTokenError
      ) {
        return res
          .status(401)
          .json({ message: "Refresh token invalid or expired" });
      }

      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
  };

  generate2factorAuthentication = async (
    req: any,
    res: any
  ): Promise<any> => {};

  validate2factorAuthentication = async (
    req: any,
    res: any
  ): Promise<any> => {};

  logoutDevice = async (req: any, res: any): Promise<any> => {};

  logoutDevices = async (req: any, res: any): Promise<any> => {};

  current = async (req: any, res: any): Promise<any> => {
    try {
      const user = await this.authRepository.getById(req.user.id);
      return serviceResponse.accepted(res, "Accepted", {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      });
    } catch (error) {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  };
}
