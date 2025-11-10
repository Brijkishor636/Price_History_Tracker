import express, { Request, Response} from "express";
import { productFind } from "../controller/productController";
import { verifyToken } from "../middlewares/authMiddleware";

const productRouter = express.Router();

productRouter.post("/", verifyToken, (req: Request, res: Response)=>productFind(req, res));

export default productRouter;