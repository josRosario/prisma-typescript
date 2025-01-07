import { Router } from "express";
import { createUser, allUsers } from "../controllers/user.controller";

const authRouter:Router = Router();

authRouter.post("/register", createUser);
authRouter.get("/users", allUsers);

export default authRouter;