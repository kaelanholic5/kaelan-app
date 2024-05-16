import { notes } from '../../data/notes/data';
import { Note } from '../../types/notes/NoteTypes';

export default function () {
    const notesList: Note[] = [...notes.values()];
    return JSON.stringify(notesList);
}