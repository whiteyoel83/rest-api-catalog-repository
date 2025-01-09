import express from "express";
import { UserController } from "../controller/UserController";
import { serviceResponse } from "../utils/serviceResponse";
import { CATALOG } from "../const/catalog";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/", (req, res) => {
  try {
    const users = userController.findAll();
    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.GET_ALL_SUCCESS,
      users
    );
  } catch (error) {
    return serviceResponse.internalServerError(
      res,
      CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
      null
    );
  }
});

userRoutes.get("/:email", (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const user = userController.findByEmail(email);
    if (user === null) {
      return serviceResponse.notFound(
        res,
        CATALOG.USERS.MESSAGES.NOT_FOUND,
        null
      );
    }

    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.GET_BY_EMAIL_SUCCESS,
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

userRoutes.get("/:username", (req, res) => {
  try {
    const username = req.params.username;
    if (!username) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const user = userController.findByUsername(username);
    if (user === null) {
      return serviceResponse.notFound(
        res,
        CATALOG.USERS.MESSAGES.NOT_FOUND,
        null
      );
    }

    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.GET_BY_USERNAME_SUCCESS,
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

userRoutes.post("/", async (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const newUser = await userController.create(user);
    if (newUser === null) {
      return serviceResponse.badRequest(
        res,
        CATALOG.USERS.MESSAGES.CREATED_ERROR,
        null
      );
    }

    return serviceResponse.created(
      res,
      CATALOG.USERS.MESSAGES.CREATED_SUCCESS,
      newUser
    );
  } catch (error) {
    return serviceResponse.internalServerError(
      res,
      CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
      null
    );
  }
});

userRoutes.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const user = req.body;
    if (!user) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const updatedUser = userController.update(id, user);
    if (updatedUser === null) {
      return serviceResponse.notFound(
        res,
        CATALOG.USERS.MESSAGES.NOT_FOUND,
        null
      );
    }

    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.UPDATED_SUCCESS,
      updatedUser
    );
  } catch (error) {
    return serviceResponse.internalServerError(
      res,
      CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
      null
    );
  }
});

userRoutes.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return serviceResponse.notAcceptable(
        res,
        CATALOG.USERS.MESSAGES.MISSING_ID,
        null
      );
    }

    const deletedUser = userController.delete(id);
    if (deletedUser === null) {
      return serviceResponse.notFound(
        res,
        CATALOG.USERS.MESSAGES.NOT_FOUND,
        null
      );
    }
    return serviceResponse.ok(
      res,
      CATALOG.USERS.MESSAGES.DELETED_SUCCESS,
      deletedUser
    );
  } catch (error) {
    return serviceResponse.internalServerError(
      res,
      CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR,
      null
    );
  }
});

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
