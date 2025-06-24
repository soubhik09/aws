import express from "express";
import { V1Controller } from "../../../controller";
const route = express.Router();

route.get("/download-file", V1Controller.DownloadController.downloadFileFromDrive);

export default route;
