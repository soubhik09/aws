"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../../../controller");
const route = express_1.default.Router();
route.get("/download-file", controller_1.V1Controller.DownloadController.downloadFileFromDrive);
exports.default = route;
