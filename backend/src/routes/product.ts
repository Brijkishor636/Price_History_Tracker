import express, { Request, Response} from "express";
import { productFind } from "../controller/productController";

const productRouter = express.Router();

productRouter.post("/", (req: Request, res: Response)=>productFind(req, res));

export default productRouter;