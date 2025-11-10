import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) =>{
    let token = req.cookies.token;
    // console.log(token);
    if(!token){
        return res.status(403).json({
            msg: "no token, Autorization denied!!"
        })
    }
    
    try{
        const secretKey = process.env.JWT_SECRET as Secret;
        const decoded = jwt.verify(token, secretKey);
        if(typeof decoded === "object" && decoded !== null){
            req.user = {
                userId: (decoded as any).userId
            }
            next();
        }
        else{
            return res.status(401).json({
                msg: "Invalid token!!"
            })
        }
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            msg: "Internal server error!!"
        })
    }
}