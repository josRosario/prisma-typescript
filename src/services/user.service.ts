import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/user";

export const registerUser = async (user: IUser) => {
    try {
        const prisma: PrismaClient = new PrismaClient();
        const existingUser = await prisma.user.findFirst({
            where: {
                email: user.email
            }
        });

        if (existingUser) {
            throw new Error('User already exists');
        };

        const newUser = await prisma.user.create({
            data: user
        });

        return newUser;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }

}