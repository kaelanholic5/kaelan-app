import { Note, NoteFromFile } from '../../types/notes/NoteTypes';
import notesJson from './notes.json';
import { DateTime } from 'luxon';

let savedNotes: NoteFromFile[] = notesJson as NoteFromFile[];
export let notes: Map<string, Note> = new Map(savedNotes.map(obj => 
    [
        obj.id, 
        {
            note: obj.note,
            createdDate: DateTime.fromISO(obj.createdDate),
            updatedDate: DateTime.fromISO(obj.updatedDate),
            id: obj.id
        }
]));