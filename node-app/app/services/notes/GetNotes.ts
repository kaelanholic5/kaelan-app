import { Note } from '../../types/notes/NoteTypes';
import { collections } from '../mongodb/MongoDBService';
export default async function () {
    let notesList: Note[] = [];

    if (collections.notes){
        notesList = await collections.notes.find().toArray();
    }
    return JSON.stringify(notesList);
}