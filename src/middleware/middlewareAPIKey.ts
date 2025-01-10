import { NextFunction, Request, Response } from "express";
import { Config } from "../config/config";

export function validateAPiKey(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const apiKey = req.get("X-API-KEY");
  console.log("apiKey", apiKey);
  if (!apiKey) {
    res.status(401).json({
      message: "Missing - Api Key",
      // data: null,
    });
    return;
  }
  if (apiKey !== Config.API_KEY) {
    res.status(401).json({
      message: "Unauthorized - Api Key",
      // data: null,
    });
    return;
  }
  next();
}
