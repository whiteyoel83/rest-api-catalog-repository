import { Config } from "../config/config";
import { UserRepository } from "../repositories/UserRepository";
import { serviceResponse } from "../utils/serviceResponse";
import jwt from "jsonwebtoken";

const userRepository = UserRepository.getInstance();
export async function ensureAuthorized(req: any, res: any, next: any) {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    serviceResponse.unauthorized(res, "Access token missing", null);
  }
  try {
    const decodedAccessToken: any = jwt.verify(
      accessToken,
      Config.JWT_TOKEN_KEY
    );

    const user = await userRepository.getById(decodedAccessToken.id);
    const roles: any = [
      {
        id: 1,
        name: "admin",
        slug: "admin",
        description: "Admin",
      },
    ]; // await rolesRepository.getRolesByUserId(decodedAccessToken.id);

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decodedAccessToken;
    req.user.roles = roles;
    next();
  } catch (error) {
    serviceResponse.unauthorized(res, "Invalid access token", null);
  }
}
