import express from "express";
import { AuthController } from "../controllers/AuthController";
import { ensureAuthenticated } from "../middleware/middlewareAuthenticated";

const authRoutes = express.Router();
const authController = new AuthController();

authRoutes.post("/login", authController.login);
authRoutes.post("/register", authController.create);
authRoutes.get("/current", ensureAuthenticated, authController.current);
authRoutes.post(
  "/login2factorAuthentication",
  authController.login2factorAuthentication
);
authRoutes.post("/refresh-token", authController.refreshToken);
authRoutes.get(
  "/2factorAuthentication/generate",
  ensureAuthenticated,
  authController.generate2factorAuthentication
);
authRoutes.post(
  "/2factorAuthentication/validate",
  ensureAuthenticated,
  authController.validate2factorAuthentication
);
authRoutes.post(
  "/logout-device",
  ensureAuthenticated,
  authController.logoutDevice
);
authRoutes.post(
  "/logout-devices",
  ensureAuthenticated,
  authController.logoutDevices
);

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
