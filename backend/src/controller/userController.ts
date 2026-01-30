import { Request, Response } from "express"
import { signInInputs, signUpInputs } from "../input";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { success } = signUpInputs.safeParse(body);
    if (!success) {
      return res.status(400).json({
        msg: "Incorrect inputs...",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return res.status(409).json({
        msg: "User already exists, please login",
      });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    const secret = process.env.JWT_SECRET as Secret;
    if (!secret) {
      return res.status(500).json({
        msg: "JWT secret is not configured",
      });
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    const token = jwt.sign(
      { userId: user.id },
      secret,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
      path: "/",
    });

    return res.status(201).json({
      msg: "User created successfully",
    });

  } catch (e) {
    console.error("Signup error:", e);
    return res.status(500).json({
      msg: "Internal server error!!",
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const { success } = signInInputs.safeParse(body);
    if (!success) {
      return res.status(400).json({
        msg: "Incorrect inputs, try again!!",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return res.status(404).json({
        msg: "User not found!!",
      });
    }

    const passwordMatch = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        msg: "Invalid email or password!!",
      });
    }

    const secretKey = process.env.JWT_SECRET as Secret;
    if (!secretKey) {
      return res.status(500).json({
        msg: "JWT secret is not configured",
      });
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    const token = jwt.sign(
      { userId: user.id },
      secretKey,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({
      msg: "Login successfully",
    });

  } catch (e) {
    console.error("Signin error:", e);
    return res.status(500).json({
      msg: "Internal server error!!",
    });
  }
};

export const currentUser = async (req: Request, res: Response) =>{
  try{
    const token = req.cookies.token;
    if(!token){
      return res.status(403).json({
        msg: "unauthorized user!!"
      })
    }
    const secret = process.env.JWT_SECRET as Secret;
    const payload = jwt.verify(token, secret) as { userId: string } | string;
    const userIdString = typeof payload === "string" ? payload : payload.userId;
    const userId = Number(userIdString);
    if (Number.isNaN(userId)) {
      return res.status(400).json({ msg: "Invalid user id in token" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({
      user
    })
  }
  catch (e) {
  if (e instanceof jwt.TokenExpiredError) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return res.status(401).json({
      msg: "Session expired, please login again",
    });
  }

  return res.status(500).json({ msg: "Internal server error" });
}
}


export const logOut = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  return res.status(200).json({
    msg: "Logged out successfully",
  });
};