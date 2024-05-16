import { Express, Request, Response } from 'express';
import createNote from '../services/notes/CreateNote';
import deleteNote from '../services/notes/DeleteNote';
import getNotes from '../services/notes/GetNotes';
import updateNote from '../services/notes/UpdateNote';
import clearNotes from '../services/notes/ClearNotes';
import security from '../services/SecurityService';
import { CreateNoteRequest, DeleteNoteRequest, UpdateNoteRequest } from '../types/notes/NoteTypes';
import { handleError } from '../services/ErrorService';

export default function createNoteRoutes(app: Express) {
    app.post("/createNote", async (req: Request, res: Response) => {
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
    
    app.delete("/deleteNote", async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: DeleteNoteRequest = req.body;
                res.send(await deleteNote(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Deleting Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.post("/clearNotes", async (req: Request, res: Response) => {
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
    
    app.put("/updateNote", async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: UpdateNoteRequest = req.body;
                res.send(await updateNote(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Updating Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    
    app.get("/getNotes", (req: Request, res: Response) => {
        if (security(req)) {
            try {
                res.send(getNotes());
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Getting Notes'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
}
