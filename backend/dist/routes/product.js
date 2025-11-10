"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const productRouter = express_1.default.Router();
productRouter.post("/", authMiddleware_1.verifyToken, (req, res) => (0, productController_1.productFind)(req, res));
exports.default = productRouter;
