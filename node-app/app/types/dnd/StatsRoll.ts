import { ObjectId } from "mongodb"

export type StatsRollRound = {
    rolls: number[],
    usedRolls: number[],
    unusedRoll: number,
    total: number
}

export type StatsRollResponse = {
    rolls: StatsRollRound[],
    total: number
}

export type StatsRoll = {
    _id?: ObjectId,
    rolls: StatsRollRound[],
    total: number,
    name: string
}

export type StatsRollRequest = {
    minimum?: number,
    name: string
}

