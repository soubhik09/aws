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
const models_1 = __importDefault(require("../../../models"));
const route = express_1.default.Router();
route.get("/getalluser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield models_1.default.findAll();
        return res.status(200).json({ allUser });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}));
route.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, role } = req.body;
    try {
        if (!fullName || !email || !password || !role) {
            return res.status(500).json({ message: "Input field are missing" });
        }
        const user = yield models_1.default.create({ fullName, email, password, role });
        return res
            .status(201)
            .json({ message: "User created successfully!", user });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}));
route.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, fullName, email, password, role } = req.body;
    if (!id)
        return res.status(400).json({ message: "Input field missing" });
    try {
        const user = yield models_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = yield user.update({
            fullName,
            password,
            role,
            email,
        });
        return res.status(200).json({ message: "User updated", updatedUser });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}));
route.delete("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        if (!id)
            return res.status(400).json({ message: "Input field missing" });
        yield models_1.default.destroy({ where: { id } });
        return res.status(200).json({ message: "User deleted successfully!" });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}));
exports.default = route;
