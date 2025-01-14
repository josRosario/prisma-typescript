import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/user";
import {hashSync, compareSync} from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JSON_SECRET } from "../secrets";

const prisma: PrismaClient = new PrismaClient();

export const registerUser = async (user: IUser) => {
    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email: user.email
            }
        });

        if (existingUser) {
            throw new Error('User already exists');
        };

        const newUser = await prisma.user.create({
            data:{
                email: user.email,
                name: user.name,
                password: hashSync(user.password, 10)
            }
        });

        return newUser;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }

}

export const getUsers = async () => {  
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}


export const loginUser = async (user: IUser) => {
    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email: user.email
            }
        });

        if (!existingUser) {
            throw new Error('User does not exist');
        }

        const isPasswordValid = compareSync(user.password, existingUser.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        };    
        const token = jwt.sign({
            id: existingUser.id,
            email: existingUser.email,
            name: existingUser.name
        }, JSON_SECRET, { expiresIn: '1h' });
        return token;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};