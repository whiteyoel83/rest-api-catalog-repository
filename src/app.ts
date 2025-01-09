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

app.get("/", (req, res) => {
  serviceResponse.ok(res, "Welcome to the API", null);
});

router.use(`/api/${Config.API_VERSION}/auth`, authRoutes);
router.use(`/api/${Config.API_VERSION}/users`, userRoutes);

app.use((req, res) => {
  serviceResponse.notFound(res, "Not found", null);
});
export default app;
