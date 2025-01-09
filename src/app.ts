import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import { Config } from "./config/config";
import userRoutes from "./routes/userRoutes";
import { serviceResponse } from "./utils/serviceResponse";

const app = express();
const router = express.Router();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(router);

// app.use((req, res) => {
//   try {
//     if (new Url(req.query.url).host !== Config.HOST) {
//       return res
//         .status(400)
//         .end(`Unsupported redirect to host: ${req.query.url}`);
//     }
//   } catch (e) {
//     return res.status(400).end(`Invalid url: ${req.query.url}`);
//   }
//   res.redirect(req.query.url);
// });

app.get("/", (req, res) => {
  serviceResponse.ok(res, "Welcome to the API", null);
});

router.use(`/api/${Config.API_VERSION}/auth`, authRoutes);
router.use(`/api/${Config.API_VERSION}/users`, userRoutes);

app.use((req, res, next) => {
  serviceResponse.notFound(res, "Sorry can't find that!", null);
});

// custom error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  serviceResponse.internalServerError(res, "Something broke!", null);
});

export default app;
