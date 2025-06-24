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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignedUrl = exports.uploadFile = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const uuid_1 = require("uuid");
const s3 = new aws_sdk_1.default.S3({
    region: process.env.AWS_REGION_NAME,
});
const uploadFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const fileKey = `uploads/${(0, uuid_1.v4)()}-${file.originalname}`;
    yield s3.putObject({
        Bucket: process.env.AWS_BUCKET,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype,
    }).promise();
    return fileKey;
});
exports.uploadFile = uploadFile;
const getSignedUrl = (key) => {
    const signedUrl = s3.getSignedUrl('getObject', {
        Bucket: process.env.AWS_BUCKET,
        Key: key,
        Expires: 60 * 5,
    });
    return signedUrl;
};
exports.getSignedUrl = getSignedUrl;
