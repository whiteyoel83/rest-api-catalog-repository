import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { corsMiddleware } from "./middleware/middlewareCors";
import authRoutes from "./routes/authRoutes";
import { Config } from "./config/config";
import userRoutes from "./routes/userRoutes";
import { serviceResponse } from "./utils/serviceResponse";

import Stripe from "stripe";
import { saveLogs } from "./utils/logs";
import { createServer } from "http";
import { Server } from "socket.io";
import fileRoutes from "./routes/fileRoutes";

const app = express();
const router = express.Router();
const stripe = new Stripe(Config.STRIPE_SECRET_KEY);
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://${Config.HOST}:${Config.PORT}/`,
    methods: ["GET", "POST"],
    credentials: true,
  },
  allowEIO3: true,
  transports: ["websocket", "polling"],
});
app.disable("x-powered-by");
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(corsMiddleware());
app.use(express.json());
app.use(router);

// custom error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  serviceResponse.internalServerError(res, "Something broke!", null);
});

app.get("/", (req, res) => {
  serviceResponse.ok(res, "Welcome to the API", null);
});

//Prevent open redirects from malicious websites
app.use((req, res) => {
  const urlString = req.query.url?.toString() ?? "";
  try {
    if (new URL(urlString).host !== Config.HOST) {
      return res
        .status(400)
        .end(`Unsupported redirect to host: ${req.query.url}`);
    }
  } catch (e) {
    return res.status(400).end(`Invalid url: ${req.query.url}`);
  }
  res.redirect(urlString);
});

app.all("(.*)", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next();
});

router.use(`/api/${Config.API_VERSION}/auth`, authRoutes);
router.use(`/api/${Config.API_VERSION}/users`, userRoutes);
router.use(`/api/${Config.API_VERSION}/upload`, fileRoutes);

app.use((req, res, next) => {
  serviceResponse.notFound(res, "Sorry can't find that!", null);
});

saveLogs("error.log");
saveLogs("info.log");
saveLogs("warning.log");

export default app;
