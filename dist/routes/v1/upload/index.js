"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("../../../middlewares"));
const controller_1 = require("../../../controller");
const route = express_1.default.Router();
route.post("/upload-file", middlewares_1.default.single("file"), controller_1.V1Controller.UploadController.uploadFileInDrive);
exports.default = route;
