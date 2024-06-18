import { Express, Request, Response } from 'express';
import { handleError } from '../services/general/ErrorService';
import security from '../services/general/SecurityService';
import { rollDice } from '../services/dnd/DiceRoll';
import { DiceRollRequest } from '../types/dnd/DiceRoll';
import { StatsRollRequest } from '../types/dnd/StatsRoll';
import { rollStatsWithMinimum } from '../services/dnd/StatsRoll';
import getDiceRolls from '../services/dnd/GetDiceRolls';
import getStatsRolls from '../services/dnd/GetStatsRolls'

const baseUrl = '/dnd';
export default function createDnDRoutes(app: Express) {
    app.post(`${baseUrl}/rollDice`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: DiceRollRequest = req.body;
                res.send(await rollDice(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Rolling Dice'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    app.post(`${baseUrl}/rollStats`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                let request: StatsRollRequest = req.body;
                res.send(await rollStatsWithMinimum(request));
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Rolling Stats'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    app.get(`${baseUrl}/getDiceRolls`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                res.send(await getDiceRolls());
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Rolling Stats'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
    app.get(`${baseUrl}/getStatsRolls`, async (req: Request, res: Response) => {
        if (security(req)) {
            try {
                res.send(await getStatsRolls());
            } catch (err) {
                res.status(400).send(handleError(err, 'Error Rolling Stats'));
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    });
};