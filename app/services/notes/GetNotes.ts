import { notes } from '../../data/notes/Data';
import { Note } from '../../types/notes/NoteTypes';

export default function () {
    const notesList: Note[] = [...notes.values()];
    return JSON.stringify(notesList);
}