export type DiceRollRequest = {
    numberOfDice: number,
    numberOfSides: number
}

export type DiceRollResponse = {
    rolls: number[],
    total: number
}