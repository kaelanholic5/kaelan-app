export type DiceRollRequest = {
    numberOfDice: number,
    numberOfSides: number,
    name: string
}

export type DiceRollResponse = {
    rolls: number[],
    total: number
}

export type DiceRoll = {
    rolls: number[],
    total: number,
    numberOfDice: number,
    numberOfSides: number,
    name: string
}