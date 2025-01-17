import { serviceResponse } from "../utils/serviceResponse";
import { Config } from "../config/config";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";
import { CATALOG } from "../const/catalog";

export async function ensureAuthenticated(req: any, res: any, next: any) {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return serviceResponse.unauthorized(res, "Access token not found", null);
  }

  const userInvalidTokens = await UserRepository.getInstance().getInvalidToken(
    accessToken
  );
  if (userInvalidTokens) {
    return serviceResponse.unauthorized(res, "Access token invalid", null);
  }

  try {
    const decodedAccessToken: any = jwt.verify(
      accessToken,
      Config.ACCESS_TOKEN_SECRET
    );

    req.accessToken = { value: accessToken, exp: decodedAccessToken.exp };
    req.user = { id: decodedAccessToken.id };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return serviceResponse.unauthorized(res, "Access token expired", null);
    } else if (error instanceof jwt.JsonWebTokenError) {
      return serviceResponse.unauthorized(res, "Access token invalid", null);
    } else {
      return serviceResponse.internalServerError(
        res,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
        null
      );
    }
  }
}
