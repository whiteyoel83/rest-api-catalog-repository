import express from "express";
import { UserController } from "../controller/UserController";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Missing id" });
  }

  const user = userController.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    user,
    message: "Users",
  });
});

export default userRoutes;
