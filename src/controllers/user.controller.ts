import { Request, Response } from "express";
import { registerUser } from "../services/user.service";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = {
            email,
            name,
            password
        }

        const newUser = await registerUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
}