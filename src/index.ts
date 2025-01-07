import express, {Express} from 'express';
import { PORT } from './secrets';
import { PrismaClient } from '@prisma/client';

const app: Express = express();

app.use(express.json());

export const prisma = new PrismaClient({
    log: ['query'],
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})