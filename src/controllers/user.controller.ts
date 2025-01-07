import { Request, Response } from "express";
import { registerUser, getUsers, loginUser } from "../services/user.service";

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

export const allUsers = async(req: Request, res: Response) => {
    try {
        const user = await getUsers();
         res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = {
            email,
            password,
            name: ""	
        }

        const existingUser = await loginUser(user);
        res.status(200).json(existingUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
}