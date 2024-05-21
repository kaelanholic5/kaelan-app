import * as mongoDB from "mongodb";
import { Note } from "../../types/notes/NoteTypes";
import { DiceRoll } from "../../types/dnd/DiceRoll";
import { StatsRoll } from "../../types/dnd/StatsRoll";
export const collections: { 
    notes?: mongoDB.Collection<Note>,
    diceRolls?: mongoDB.Collection<DiceRoll>,
    statsRolls?: mongoDB.Collection<StatsRoll>
} = {};

export async function connectToDatabase() {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGO_DB_URL ?? '');       
    await client.connect();
    const notesDb: mongoDB.Db = client.db('notes');
    const dndDb: mongoDB.Db = client.db('dnd');
    collections.notes = notesDb.collection<Note>('notes');
    collections.diceRolls = dndDb.collection<DiceRoll>('diceRolls');
    collections.statsRolls = dndDb.collection<StatsRoll>('statsRolls');
    console.log(`Successfully connected to database: ${notesDb.databaseName} and ${dndDb.databaseName}`);
 }