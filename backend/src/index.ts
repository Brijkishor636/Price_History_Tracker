import express from "express";
import userRouter from "./routes/user";
import productRouter from "./routes/product";

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.listen(3000);
