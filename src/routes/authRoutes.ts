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

export default authRoutes;
