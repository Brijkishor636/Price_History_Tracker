"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInInputs = exports.signUpInputs = void 0;
const zod_1 = require("zod");
exports.signUpInputs = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4)
});
exports.signInInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4)
});
