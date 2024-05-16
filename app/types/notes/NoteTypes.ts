import { DateTime } from 'luxon';

export type Note = {
    note: string,
    createdDate: DateTime,
    updatedDate: DateTime,
    id: string,
}

export type CreateNoteRequest = {
    note: string,
}

export type UpdateNoteRequest = {
    note: string,
    id: string,
}

export type DeleteNoteRequest = {
    id: string,
}

export type NoteFromFile = {
    note: string,
    createdDate: string,
    updatedDate: string,
    id: string,
}