import { DateTime } from 'luxon';
import { updateDataFile } from './FileService';
import { Note, UpdateNoteRequest } from '../../types/notes/NoteTypes';
import { notes } from '../../data/notes/data';

export default async function (request: UpdateNoteRequest) {
    const existingNote = notes.get(request.id);
    if (!existingNote) {
        throw new Error('No note with that id');
    }
    const now = DateTime.now();
    const newNote: Note = {
        note: request.note,
        createdDate: existingNote.createdDate,
        updatedDate: now,
        id: existingNote.id,
    }
    notes.set(existingNote.id, newNote);
    await updateDataFile();
    return JSON.stringify(newNote);
}