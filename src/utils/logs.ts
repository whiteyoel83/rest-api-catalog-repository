import fs from "fs";
import { Config } from "../config/config";
import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: Config.SERVICE_NAME },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "warning.log", level: "warning" }),
  ],
});

export function saveLogs(file: string) {
  const path = Config.LOGS_PATH;
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path + file);
  }
}
