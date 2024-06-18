import { DateTime } from 'luxon';
import { Note, UpdateNoteRequest } from '../../types/notes/NoteTypes';
import { collections } from '../mongodb/MongoDBService';
import { ObjectId } from 'mongodb';

export default async function (id: string, request: UpdateNoteRequest) {
    const now = DateTime.now();
    const newNote: Note = {
        note: request.note,
        updatedDate: now,
    }
    let result;
    const query = { _id: new ObjectId(id) };
    if (collections.notes) {
        result = await collections.notes.updateOne(query, { $set: newNote });
    }
    if (result) {
        return JSON.stringify(`Successfully updated Note ${id}`);
    }
    return JSON.stringify(`Could not update Note ${id}`);
}