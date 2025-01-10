import express from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/", userController.getAll);
//Bind the method when passing It
userRoutes.get("/with", userController.getAllWithPaginate.bind(userController));
userRoutes.post("/", userController.create);
// userRoutes.put("/:id", userController.update);
// userRoutes.delete("/:id", userController.delete);

export default userRoutes;
