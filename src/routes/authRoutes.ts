import express from "express";

const authRoutes = express.Router();

authRoutes.get("/", (req, res) => {
  res.json({
    message: "Auth",
  });
});

export default authRoutes;
