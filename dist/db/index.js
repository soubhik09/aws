"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// DB_NAME as string,
// DB_USER as string,
// "V0GSTEWKYGgNkibcWycoz3W0IWsEg6Qm",
const sequelize = new sequelize_1.Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
