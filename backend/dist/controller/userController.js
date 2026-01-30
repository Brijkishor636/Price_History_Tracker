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
exports.logOut = exports.currentUser = exports.signin = exports.signup = void 0;
const input_1 = require("../input");
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const { success } = input_1.signUpInputs.safeParse(body);
        if (!success) {
            return res.status(411).json({
                msg: "Incorrect inputs..."
            });
        }
        const existUser = yield prisma.user.findFirst({
            where: {
                email: body.email
            }
        });
        if (existUser) {
            return res.status(404).json({
                msg: "User already exists, please login"
            });
        }
        const hashPassword = yield bcryptjs_1.default.hash(body.password, 10);
        const user = yield prisma.user.create({
            data: {
                name: body === null || body === void 0 ? void 0 : body.name,
                email: body.email,
                password: hashPassword
            }
        });
        const secret = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, secret, { expiresIn: '1h' });
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
        });
        return res.status(201).json({
            msg: "User created successfully..",
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error!!"
        });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const { success } = input_1.signInInputs.safeParse(body);
        if (!success) {
            return res.status(411).json({
                msg: "Incorrect inputs, try again!!"
            });
        }
        const user = yield prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
        if (!user) {
            return res.status(400).json({
                msg: "User not found!!"
            });
        }
        const originalPassword = yield bcryptjs_1.default.compare(body.password, user.password);
        if (!originalPassword) {
            return res.status(411).json({
                msg: "Invalid email or password!!"
            });
        }
        const userId = user.id;
        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            return res.status(500).json({ msg: "JWT secret is not configured" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: userId }, secretKey, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
        });
        return res.status(200).json({
            msg: "Login successfully..",
        });
    }
    catch (e) {
        console.log(e);
        if (e instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return res.status(401).json({ msg: "Token expired, please login again" });
        }
        return res.status(500).json({ msg: "Internal server error!!" });
    }
});
exports.signin = signin;
const currentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({
                msg: "unauthorized user!!"
            });
        }
        const secret = process.env.JWT_SECRET;
        const payload = jsonwebtoken_1.default.verify(token, secret);
        const userIdString = typeof payload === "string" ? payload : payload.userId;
        const userId = Number(userIdString);
        if (Number.isNaN(userId)) {
            return res.status(400).json({ msg: "Invalid user id in token" });
        }
        const user = yield prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.status(200).json({
            user
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
});
exports.currentUser = currentUser;
const logOut = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
    });
    return res.status(200).json({
        msg: "Logged out successfully",
    });
};
exports.logOut = logOut;
