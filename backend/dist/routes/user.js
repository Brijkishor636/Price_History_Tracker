"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userRouter = express_1.default.Router();
userRouter.post("/signup", (req, res) => (0, userController_1.signup)(req, res));
userRouter.post("/signin", (req, res) => (0, userController_1.signin)(req, res));
userRouter.get("/current", (req, res) => (0, userController_1.currentUser)(req, res));
userRouter.post("/logout", (req, res) => (0, userController_1.logOut)(req, res));
exports.default = userRouter;
