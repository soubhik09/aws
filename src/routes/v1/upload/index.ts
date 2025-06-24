import express from "express";
import uploadMiddleware from "../../../middlewares";
import { V1Controller } from "../../../controller";

const route = express.Router();

route.post("/upload-file", uploadMiddleware.single("file"), V1Controller.UploadController.uploadFileInDrive);

export default route;
