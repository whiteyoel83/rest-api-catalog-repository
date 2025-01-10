import cors from "cors";
import { Config } from "../config/config";

export const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      if (origin && Config.ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE, HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
