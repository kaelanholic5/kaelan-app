import { DiceRoll, DiceRollRequest, DiceRollResponse } from "../../types/dnd/DiceRoll";
import { collections } from "../mongodb/MongoDBService";

export async function rollDice(request: DiceRollRequest): Promise<string> {
    let rolls: number[] = [];
    if (!request.numberOfDice) {
        return 'Number of dice required!';
    }
    if (!request.numberOfSides) {
        return 'Number of sides required!';
    }
    if (!request.name) {
        return 'name required';
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
        name: request.name
    }
    if (collections.diceRolls) {
        await collections.diceRolls.insertOne(newRoll);
    }

    return JSON.stringify(response);
}

function rollSingleDice(diceSides: number) {
    const minCeiled = Math.ceil(1);
    const maxCeiled = Math.ceil(diceSides);
    return Math.floor(Math.random() * (maxCeiled - minCeiled) + minCeiled);
}