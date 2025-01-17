import { serviceResponse } from "../utils/serviceResponse";
import { Config } from "../config/config";
import jwt from "jsonwebtoken";

export async function ensureAuthenticated(req: any, res: any, next: any) {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    serviceResponse.unauthorized(res, "Access token missing", null);
  }
  try {
    const decodedAccessToken = jwt.verify(accessToken, Config.JWT_TOKEN_KEY);
    console.log(decodedAccessToken);
    req.user = decodedAccessToken;
    next();
  } catch (error) {
    serviceResponse.unauthorized(res, "Invalid access token", null);
  }
}
