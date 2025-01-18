import express from "express";
import jwt from "jsonwebtoken";
import { Config } from "../config/config";
import { UserRepository } from "../repositories/UserRepository";
import { serviceResponse } from "../utils/serviceResponse";

const viewsRoutes = express.Router();

viewsRoutes.get("/login", (req, res) => {
  const token = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  if (token || refreshToken) {
    return res.redirect("/view/profile");
  }
  return res
    .set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    .render("login", { title: "Login" });
});
viewsRoutes.get("/register", (req, res) => {
  return res
    .set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    .render("register");
});
viewsRoutes.get("/admin/dashboard", (req, res) => {
  const token = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  if (token || refreshToken) {
    try {
      return res
        .set(
          "Content-Security-Policy",
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
        )
        .render("dashboard");
    } catch (error) {
      serviceResponse.unauthorized(res, "Invalid access token", null);
    }
  }
  // serviceResponse.unauthorized(res, "Access not allowed", null);
  return res.redirect("/view/login");
});
viewsRoutes.get("/profile", (req, res) => {
  const token = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  if (token || refreshToken) {
    try {
      const decodedAccessToken: any = jwt.verify(
        token ?? refreshToken,
        Config.ACCESS_TOKEN_SECRET
      );
      return res
        .set(
          "Content-Security-Policy",
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
        )
        .render("profile", { user: decodedAccessToken });
    } catch (error) {
      serviceResponse.unauthorized(res, "Invalid access token", null);
    }
  }
  // serviceResponse.unauthorized(res, "Access not allowed", null);
  return res.redirect("/view/login");
});

export default viewsRoutes;
