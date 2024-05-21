import { DiceRollRequest, DiceRollResponse } from "../../types/dnd/DiceRoll";

export async function rollDice(request: DiceRollRequest) {
    let rolls: number[] = [];
    if (!request.numberOfDice) {
        return JSON.stringify('Number of dice required!');
    }
    if (!request.numberOfSides) {
        return JSON.stringify('Number of sides required!');
    }
    let response: DiceRollResponse = { rolls, total:0 };
    for(let i = 0; i < request.numberOfDice; i++) {
        const newRoll: number = rollSingleDice(request.numberOfSides);
        rolls.push(newRoll);
        response.total += newRoll;
    }
    return JSON.stringify(response);
}

function rollSingleDice(diceSides: number) {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(diceSides + 1);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }