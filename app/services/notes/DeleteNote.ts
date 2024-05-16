import { notes } from '../../data/notes/Data';
import { DeleteNoteRequest } from '../../types/notes/NoteTypes';
import { updateDataFile } from './FileService';

export default async function (request: DeleteNoteRequest) {
    const existingNote = notes.get(request.id);
    if (!existingNote) {
        throw new Error('No note with that id');
    }
    notes.delete(existingNote.id);
    await updateDataFile();
    return JSON.stringify(`Successfully Deleted Note ${existingNote.id}`);
}