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
//Bind the method when passing It
userRoutes.delete(
  "/loginbyemail",
  userController.loginEmail.bind(userController)
);
userRoutes.delete(
  "/loginbyusername",
  userController.loginUsername.bind(userController)
);
userRoutes.delete(
  "/loginbyphone",
  userController.loginPhone.bind(userController)
);
userRoutes.delete("/logout", userController.logout.bind(userController));

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
