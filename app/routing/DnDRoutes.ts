import { Express, Request, Response } from 'express';
import { handleError } from '../services/general/ErrorService';
import security from '../services/general/SecurityService';
import { rollDice } from '../services/dnd/DiceRoll';
import { DiceRollRequest } from '../types/dnd/DiceRoll';

const baseUrl = '/dnd';
export default function createDnDRoutes(app: Express) {
    app.post(`${baseUrl}/rollDice`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: DiceRollRequest = req.body;
                res.send(await rollDice(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Creating Note'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
};