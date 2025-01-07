import express, {Express} from 'express';
import { PORT } from './secrets';
import { PrismaClient } from '@prisma/client';
import rootRouter from './routes';

const app: Express = express();

app.use(express.json());
app.use('/api', rootRouter);

export const prisma = new PrismaClient({
    log: ['query'],
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})