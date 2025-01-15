import express from "express";
import { AuthController } from "../controllers/AuthController";

const authRoutes = express.Router();
const authController = new AuthController();

authRoutes.post("/login", authController.login);
authRoutes.post("/register", authController.create);
authRoutes.get("/current", ensureAuthenticated, authController.current);

function ensureAuthenticated(req: any, res: any, next: any) {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: "User is not authenticated" });
  }
}
// //Bind the method when passing It
// userRoutes.delete(
//   "/loginbyemail",
//   userController.loginEmail.bind(userController)
// );
// userRoutes.delete(
//   "/loginbyusername",
//   userController.loginUsername.bind(userController)
// );
// userRoutes.delete(
//   "/loginbyphone",
//   userController.loginPhone.bind(userController)
// );
// userRoutes.delete("/logout", userController.logout.bind(userController));

// userRoutes.get("/:userId/books/:bookId", (req, res) => {
//   res.send(req.params);
// });

// userRoutes.get("/flights/:from-:to", (req, res) => {
//   res.send(req.params);
// });

// userRoutes.get("/filter/:field.:operator.:value", (req, res) => {
//   res.send(req.params);
// });

export default authRoutes;
