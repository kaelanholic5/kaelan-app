import { notes } from '../../data/notes/Data';
import { Note } from '../../types/notes/NoteTypes';

export default function () {
    console.log('getting notes');
    const notesList: Note[] = [...notes.values()];
    return JSON.stringify(notesList);
}