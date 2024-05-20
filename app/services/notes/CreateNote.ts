import { DateTime } from 'luxon';
import { CreateNoteRequest, Note } from '../../types/notes/NoteTypes';
import { collections } from '../mongodb/MongoDBService';

export default async function (request: CreateNoteRequest) {
    const now: DateTime = DateTime.now();
    const newNote: Note = {
        note: request.note,
        createdDate: now,
        updatedDate: now,
    }
    let savedNote;
    if (collections.notes) {
        savedNote = await collections.notes.insertOne(newNote);
        console.log('made ', savedNote);
        newNote._id = savedNote.insertedId;
    }
    return JSON.stringify(newNote);
}
