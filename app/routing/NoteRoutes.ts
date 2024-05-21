import { Express, Request, Response } from 'express';
import createNote from '../services/notes/CreateNote';
import deleteNote from '../services/notes/DeleteNote';
import getNotes from '../services/notes/GetNotes';
import updateNote from '../services/notes/UpdateNote';
import clearNotes from '../services/notes/ClearNotes';
import security from '../services/general/SecurityService';
import { CreateNoteRequest, UpdateNoteRequest } from '../types/notes/NoteTypes';
import { handleError } from '../services/general/ErrorService';

const baseUrl = '/notes';
export default function createNoteRoutes(app: Express) {
    app.post(`${baseUrl}/createNote`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: CreateNoteRequest = req.body;
                res.send(await createNote(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Creating Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.delete(`${baseUrl}/deleteNote/:id`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                const id = req?.params?.id;
                res.send(await deleteNote(id));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Deleting Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.post(`${baseUrl}/clearNotes`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                res.send(await clearNotes());
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Clearing Notes'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.put(`${baseUrl}/updateNote/:id`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: UpdateNoteRequest = req.body;
                const id = req?.params?.id;
                res.send(await updateNote(id, request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Updating Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.get(`${baseUrl}/getNotes`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                res.send(await getNotes());
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Getting Notes'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    app.get(`/`, async (req: Request, res: Response) => {
        res.send('hello!');
    });
}
