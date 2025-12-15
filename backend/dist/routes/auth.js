"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authRouter = express_1.default.Router();
authRouter.get("/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get("/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/signin" }), (req, res) => {
    res.redirect("/dashboard");
});
authRouter.get("/github", passport_1.default.authenticate("github", { scope: ["user:email"] }));
authRouter.get("/github/callback", passport_1.default.authenticate("github", { failureRedirect: "/signin" }), (req, res) => {
    res.redirect("/dashboard");
});
exports.default = authRouter;
