import { Router } from "express";
import { createUser, allUsers, login } from "../controllers/user.controller";

const authRouter:Router = Router();

authRouter.post("/register", createUser);
authRouter.get("/users", allUsers);
authRouter.get("/login", login);

export default authRouter;