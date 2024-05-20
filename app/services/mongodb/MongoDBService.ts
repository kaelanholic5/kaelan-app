import * as mongoDB from "mongodb";
import { Note } from "../../types/notes/NoteTypes";
export const collections: { notes?: mongoDB.Collection<Note> } = {};

export async function connectToDatabase() {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGO_DB_URL ?? '');       
    await client.connect();
    const db: mongoDB.Db = client.db('notes');
    collections.notes = db.collection<Note>('notes');
    console.log(`Successfully connected to database: ${db.databaseName}`);
 }