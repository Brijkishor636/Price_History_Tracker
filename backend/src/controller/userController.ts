import { Request, Response } from "express"
import { signInInputs, signUpInputs } from "../input";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) =>{
    const body = req.body;
        try{
            const { success } = signUpInputs.safeParse(body);
            if(!success){
                return res.status(411).json({
                    msg: "Incorrect inputs..."
                })
            }
            const existUser = await prisma.user.findFirst({
                where: {
                    email: body.email
                }
            })
            if(existUser){
                return res.status(402).json({
                    msg: "User already exists, please login"
                })
            }
            const hashPassword = await bcrypt.hash(body.password, 10);
            const user = await prisma.user.create({
                data: {
                    name: body?.name,
                    email: body.email,
                    password: hashPassword
                }
            })
            const secret = process.env.JWT_SECRET as Secret;
            const token = jwt.sign({userId: user.id}, secret, {expiresIn: '1h'});
            res.cookie("token", token,{
                httpOnly: true,
                path: "/"
            })
            return res.status(200).json({
                msg: "User created successfully..",
                token
            })
        }
        catch(e){
            console.log(e);
            return res.status(500).json({
                msg: "Internal server error!!"
            })
        }
}

export const signin = async (req: Request, res: Response) =>{
    const body = req.body;
      try{
          const { success } = signInInputs.safeParse(body);
          if(!success){
            return res.status(411).json({
              msg: "Incorrect inputs, try again!!"
            })
          }
          const user = await prisma.user.findUnique({
            where: {
              email: body.email
            }
          })
          if(!user){
            return res.status(404).json({
              msg: "User not found!!"
            })}
          
          const originalPassword = await bcrypt.compare(body.password, user.password);
          if(!originalPassword){
            return res.status(411).json({
              msg: "Invalid email or password!!"
            })
          }
    
          const userId = user.id;
          const secretKey = process.env.JWT_SECRET as Secret;
          if (!secretKey) {
            return res.status(500).json({ msg: "JWT secret is not configured" });
          }
    
          const token = jwt.sign({ userId: userId}, secretKey, {expiresIn: "1h"});
          res.cookie("token", token, {
            httpOnly: true,
            path: '/'
          })
          return res.status(200).json({
            msg: "Login successfully..",
            token
          })
      }
      catch(e){
        if (e instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ msg: "Token expired, please login again" });
        }
        return res.status(500).json({ msg: "Internal server error!!" });
      }
}