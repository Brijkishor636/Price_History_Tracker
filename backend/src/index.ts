import express from "express";
import userRouter from "./routes/user";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import productRouter from "./routes/product";
import cors from "cors"
import authRouter from "./routes/auth";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/auth", authRouter);

app.listen(3000);
