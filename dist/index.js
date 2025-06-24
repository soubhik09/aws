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
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate();
        yield db_1.default.sync();
        console.log("DB Connected Successfully✅");
    }
    catch (error) {
        console.log("Unable to connect db", error);
    }
});
db();
app.use(express_1.default.json({ limit: "500mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "500mb" }));
app.get("/health-check", (req, res) => {
    res.send("Hello from Severless✅");
});
app.use("/api", routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
exports.default = app;
