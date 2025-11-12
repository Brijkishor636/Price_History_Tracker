import express from "express";
import userRouter from "./routes/user";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import productRouter from "./routes/product";
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.listen(3000);
