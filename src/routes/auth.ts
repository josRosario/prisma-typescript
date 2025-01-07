import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const authRouter:Router = Router();

authRouter.post("/register", createUser);

export default authRouter;