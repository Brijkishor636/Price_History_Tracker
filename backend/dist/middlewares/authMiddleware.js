"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    let token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(403).json({
            msg: "no token, Autorization denied!!"
        });
    }
    try {
        const secretKey = process.env.JWT_SECRET;
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        if (typeof decoded === "object" && decoded !== null) {
            req.user = {
                userId: decoded.userId
            };
            next();
        }
        else {
            return res.status(401).json({
                msg: "Invalid token!!"
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error!!"
        });
    }
};
exports.verifyToken = verifyToken;
