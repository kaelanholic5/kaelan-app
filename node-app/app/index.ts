import express, { Express } from 'express';
import dotenv from 'dotenv';
import createNoteRoutes from './routing/NoteRoutes';
import { connectToDatabase } from './services/mongodb/MongoDBService';
import createDnDRoutes from './routing/DnDRoutes';

dotenv.config();
const app: Express = express();
app.use(express.json())
const port = process.env.PORT || 3001;

createNoteRoutes(app);
createDnDRoutes(app);
connectToDatabase();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});