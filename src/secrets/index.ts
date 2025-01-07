import dotenv from 'dotenv';

dotenv.config({path: '.env'});
export const PORT = process.env.PORT || 3000;
export const JSON_SECRET = process.env!.JSON_SECRET!;