"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./download/index"));
const index_2 = __importDefault(require("./upload/index"));
const index_3 = __importDefault(require("./user/index"));
const route = express_1.default.Router();
route.use('/upload', index_2.default);
route.use('/download', index_1.default);
route.use('/user', index_3.default);
exports.default = route;
