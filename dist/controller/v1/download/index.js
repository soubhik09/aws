"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFileFromDrive = void 0;
const filehandle_1 = require("../../../services/filehandle");
const downloadFileFromDrive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.query;
    if (!key)
        return res.status(400).json({ message: "Invalid key" });
    const result = (0, filehandle_1.getSignedUrl)(key);
    return res.json({ result });
});
exports.downloadFileFromDrive = downloadFileFromDrive;
