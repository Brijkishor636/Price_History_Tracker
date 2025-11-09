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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFind = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const productFind = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    try {
        if (!url) {
            return res.status(411).json({
                msg: "Input required.."
            });
        }
        const product = yield prisma.product.findFirst({
            where: {
                url: url
            }
        });
        const allHistory = yield prisma.priceHistory.findMany({
            where: {
                productId: product === null || product === void 0 ? void 0 : product.id
            }
        });
        return res.status(200).json({
            product,
            allHistory
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error!!"
        });
    }
});
exports.productFind = productFind;
