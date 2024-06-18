import { DiceRoll, DiceRollRequest, DiceRollResponse } from "../../types/dnd/DiceRoll";
import { collections } from "../mongodb/MongoDBService";

export async function rollDice(request: DiceRollRequest): Promise<string> {
    let rolls: number[] = [];
    if (!request.numberOfDice) {
        return 'Number of Dice required!';
    }
    if (!request.numberOfSides) {
        return 'Number of Sides required!';
    }
    if (!request.name) {
        return 'Name required!';
    }
    let response: DiceRollResponse = { rolls, total:0 };
    for(let i = 0; i < request.numberOfDice; i++) {
        const newRoll: number = rollSingleDice(request.numberOfSides);
        rolls.push(newRoll);
        response.total += newRoll;
    }
    
    const newRoll: DiceRoll = {
        rolls: response.rolls,
        total: response.total,
        name: request.name,
        numberOfDice: request.numberOfDice,
        numberOfSides: request.numberOfSides
    }
    if (collections.diceRolls) {
        await collections.diceRolls.insertOne(newRoll);
    }

    return JSON.stringify(response);
}

export function rollSingleDice(diceSides: number) {
    const minCeiled = Math.ceil(1);
    const maxCeiled = Math.ceil(diceSides);
    return Math.floor(Math.random() * (maxCeiled - minCeiled) + minCeiled);
}