import express from 'express';
import { PORT } from './secrets';

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})