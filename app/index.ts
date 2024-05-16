import express, { Express } from 'express';
import dotenv from 'dotenv';
import createNoteRoutes from './routing/NoteRoutes';

dotenv.config({path:__dirname+'/.env'})
const app: Express = express();
app.use(express.json())
const port = process.env.PORT || 3000;

createNoteRoutes(app);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});