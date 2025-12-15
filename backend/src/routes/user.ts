import express, {Request, Response} from "express";
import { currentUser, logOut, signin, signup } from "../controller/userController";

const userRouter = express.Router();

userRouter.post("/signup", (req: Request, res: Response) => signup(req, res));

userRouter.post("/signin", (req: Request, res: Response) => signin(req, res));

userRouter.get("/current", (req: Request, res: Response) => currentUser(req, res));

userRouter.post("/logout", (req: Request, res: Response) => logOut(req, res));

export default userRouter;