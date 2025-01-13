import express from "express";

const authRoutes = express.Router();

authRoutes.get("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }
  return res.json({ message: "Login successful" });
});

authRoutes.post("/register", (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "Missing email, password or username" });
  }
  return res.json({ message: "Register successful" });
});

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
