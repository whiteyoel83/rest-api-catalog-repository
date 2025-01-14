import { logger } from "./logs";
import multer from "multer";
import gm from "gm";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const currentDateTime = new Date();
    const idTime = Math.floor(currentDateTime.getTime());
    const ext = file.originalname.substring(file.originalname.indexOf(".") + 1);
    cb(null, idTime + "." + ext);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
    logger.log({
      level: "error",
      message: "Error trying to upload file type: " + file.mimetype,
    });
  }
};

export const LocalUpload = multer({
  storage: storage,
  limits: {
    /*fileSize: width * height * size(mb)*/
    fileSize: 1024 * 1024 * 150,
  },
  fileFilter: fileFilter,
});
