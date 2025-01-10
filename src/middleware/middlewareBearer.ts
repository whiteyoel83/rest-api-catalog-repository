import { NextFunction, Request, Response } from "express";

export function validateToken(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.get("Authorization");
  if (!token) {
    res.status(403).json({
      message: "Missing token",
      // data: null,
    });
    return;
  }

  const parts = token && token.split(" ");
  if (!parts || parts.length !== 2 || parts[0] !== "Bearer") {
    res.status(403).json({
      message: "Invalid token",
      // data: null,
    });
    return;
  }
  next();
}
