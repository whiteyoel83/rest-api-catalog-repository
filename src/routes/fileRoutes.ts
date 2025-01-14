import express from "express";
import { LocalUpload } from "../utils/upload";
import multer from "multer";
import { serviceResponse } from "../utils/serviceResponse";

const fileRoutes = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
}).single("image");
fileRoutes.post(
  "/image-disk",
  LocalUpload.single("image"),
  async function (req, res, next) {
    try {
      if (req.file == undefined) {
        return serviceResponse.badRequest(res, "Missing file", null);
      }
      const file = req.file;
      return serviceResponse.ok(res, "Uploaded successfully", file);
    } catch (error) {
      console.error(error);
      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
  }
);

fileRoutes.post(
  "/image-with-body",
  LocalUpload.single("image"),
  async function (req, res, next) {
    try {
      if (req.file == undefined) {
        return serviceResponse.badRequest(res, "Missing file", null);
      }
      if (req.body == undefined) {
        return serviceResponse.badRequest(res, "Missing body", null);
      }
      const body = req.body;
      const file = req.file;
      return serviceResponse.ok(res, "Uploaded successfully", {
        body,
        file,
      });
    } catch (error) {
      console.error(error);
      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
  }
);

fileRoutes.post("/image-memory", async function (req, res) {
  upload(req, res, function (err: any) {
    if (err instanceof multer.MulterError) {
      console.error(err);
      return serviceResponse.badRequest(res, "Missing file", null);
    } else if (err) {
      console.error(err);
      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
    const file = req.file;
    return serviceResponse.ok(res, "Uploaded successfully", file);
  });
});

fileRoutes.post(
  "/image-multiple",
  LocalUpload.array("image", 2),
  async function (req, res, next) {
    try {
      if (req.files == undefined) {
        return serviceResponse.badRequest(res, "Missing file", null);
      }
      const files = req.files;
      return serviceResponse.ok(res, "Uploaded successfully", files);
    } catch (error) {
      console.error(error);
      return serviceResponse.internalServerError(res, "Something broke!", null);
    }
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  }
);

const cpUpload = LocalUpload.fields([
  { name: "image", maxCount: 1 },
  { name: "images", maxCount: 8 },
]);
fileRoutes.post("/image-combined", cpUpload, async function (req, res, next) {
  try {
    if (req.files == undefined) {
      return serviceResponse.badRequest(res, "Missing file", null);
    }
    const customReq = req as any;
    const file = customReq.files?.["image"]?.[0];
    const files = customReq.files?.["images"];
    return serviceResponse.ok(res, "Uploaded successfully", {
      file,
      files,
    });
  } catch (error) {
    console.error(error);
    return serviceResponse.internalServerError(res, "Something broke!", null);
  }
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['file'][0] -> File
  //  req.files['files'] -> Array
  //
  // req.body will contain the text fields, if there were any
});

export default fileRoutes;
