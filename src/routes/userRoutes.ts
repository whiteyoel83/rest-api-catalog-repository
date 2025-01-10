import express from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/", userController.getAll);
//Bind the method when passing It
userRoutes.get("/with", userController.getAllWithPaginate.bind(userController));
userRoutes.post("/", userController.create.bind(userController));
userRoutes.get("/id/:id", userController.getById.bind(userController));
userRoutes.get("/email/:email", userController.getByEmail.bind(userController));
userRoutes.get(
  "/username/:username",
  userController.getByUsername.bind(userController)
);
userRoutes.get("/phone/:phone", userController.getByPhone.bind(userController));
userRoutes.put("/id/:id", userController.update.bind(userController));
userRoutes.delete("/id/:id", userController.delete.bind(userController));

userRoutes.get("/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

userRoutes.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

userRoutes.get("/filter/:field.:operator.:value", (req, res) => {
  res.send(req.params);
});

export default userRoutes;
