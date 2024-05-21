import { StatsRoll, StatsRollRequest, StatsRollResponse, StatsRollRound } from "../../types/dnd/StatsRoll";
import { collections } from "../mongodb/MongoDBService";

export async function rollStatsWithMinimum(request: StatsRollRequest): Promise<string> {
    if (request.minimum && request.minimum >= 108) {
        return 'Set a reasonable minimum!'; 
    }
    if(!request.name) {
        return 'name required';
    }
    let total = 0;
    let statsRoll: StatsRollResponse = {
        rolls: [],
        total: 0
    };
    if (request.minimum) {
        while(total < request.minimum) {
            statsRoll = rollStats();
            total = statsRoll.total;
        }
    } else {
        statsRoll = rollStats();
    }
    const newStatsRoll: StatsRoll = {
        rolls: statsRoll.rolls,
        total: statsRoll.total,
        name: request.name
    }
    if (collections.statsRolls) {
        await collections.statsRolls.insertOne(newStatsRoll);
    }
    return JSON.stringify(statsRoll);
}

export function rollStats(): StatsRollResponse {
    let rolls: StatsRollRound[] = [];
    let response: StatsRollResponse = { rolls, total:0 };
    for(let i = 0; i < 6; i++) {
        const newRollRound: StatsRollRound = rollSingleStatsRoll();
        rolls.push(newRollRound);
        response.total += newRollRound.total;
    }
    return response;
}

function rollSingleStatsRoll(): StatsRollRound {
    const minCeiled = Math.ceil(1);
    const maxCeiled = Math.ceil(6);

    let allRolls = [];
    for(let i = 0; i < 4; i++) {
        allRolls.push(Math.floor(Math.random() * (maxCeiled - minCeiled) + minCeiled));
    }
    allRolls.sort((a, b) => {return b-a});
    let usedRolls = allRolls.slice(0, 3);
    let rollRound: StatsRollRound = {
        rolls: allRolls,
        usedRolls,
        unusedRoll: allRolls.slice(3).pop() ?? 0,
        total: usedRolls.reduce((sum, a) => sum + a, 0)
    }
    return rollRound;
}