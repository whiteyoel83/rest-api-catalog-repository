import express from "express";
import { UserController } from "../controller/UserController";
import { serviceResponse } from "../utils/serviceResponse";
import { CATALOG } from "../const/catalog";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const user = userController.findById(id);
    if (user === null) {
      return serviceResponse.notFound(
        res,
        CATALOG.USERS.MESSAGES.NOT_FOUND,
        null
      );
    }

    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.GET_BY_ID_SUCCESS,
      user
    );
  } catch (error) {
    return serviceResponse.internalServerError(
      res,
      CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
      null
    );
  }
});

export default userRoutes;
