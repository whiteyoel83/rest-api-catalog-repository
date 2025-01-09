import express from "express";
import { UserController } from "../controller/UserController";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../services/UserService";
import { UserDal } from "../dal/UserDal";

const userRoutes = express.Router();
const userService = new UserService();
const userDal = new UserDal();
const userRepository = new UserRepository(userService, userDal);
const userController = new UserController(userRepository);

userRoutes.get("/", userController.findAll);

export default userRoutes;
