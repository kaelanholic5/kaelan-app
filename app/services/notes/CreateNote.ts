import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { updateDataFile } from './FileService';
import { CreateNoteRequest, Note } from '../../types/notes/NoteTypes';
import { notes } from '../../data/notes/Data';

export default async function (request: CreateNoteRequest) {
    const now: DateTime = DateTime.now();
    const newNote: Note = {
        note: request.note,
        createdDate: now,
        updatedDate: now,
        id: uuidv4(),
    }
    notes.set(newNote.id, newNote);
    await updateDataFile();
    return JSON.stringify(newNote);
}
