import express from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/", userController.getAll);
userRoutes.get("/with", userController.getAllWithPaginate);
userRoutes.post("/", userController.create);
userRoutes.get("/id/:id", userController.getById);
userRoutes.get("/email/:email", userController.getByEmail);
userRoutes.get("/username/:username", userController.getByUsername);
userRoutes.get("/phone/:phone", userController.getByPhone);
userRoutes.put("/id/:id", userController.update);
userRoutes.delete("/id/:id", userController.delete);

export default userRoutes;
