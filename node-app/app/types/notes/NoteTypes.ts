import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

export type Note = {
    note: string,
    createdDate?: DateTime,
    updatedDate?: DateTime,
    _id?: ObjectId
}

export type CreateNoteRequest = {
    note: string,
}

export type UpdateNoteRequest = {
    note: string
}

export type NoteFromFile = {
    note: string,
    createdDate: string,
    updatedDate: string,
    id: string,
}