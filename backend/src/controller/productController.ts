import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express"

const prisma = new PrismaClient();
export const productFind = async (req: Request, res: Response) =>{
    const url = req.body.url;
    try{
        if(!url){
            return res.status(411).json({
                msg: "Input required.."
            })
        }
        const product = await prisma.product.findFirst({
            where: {
                url: url
            }
        })
        const allHistory = await prisma.priceHistory.findMany({
            where: {
                productId: product?.id
            }
        })
        return res.status(200).json({
            product,
            allHistory
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error!!"
        })
    }
}