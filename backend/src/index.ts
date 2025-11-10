import express from "express";
import userRouter from "./routes/user";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import productRouter from "./routes/product";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.listen(3000);
