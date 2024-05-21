import { ObjectId } from "mongodb"

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
    _id?: ObjectId,
    rolls: number[],
    total: number,
    numberOfDice: number,
    numberOfSides: number,
    name: string
}