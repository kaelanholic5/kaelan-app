import { StatsRoll } from '../../types/dnd/StatsRoll';
import { collections } from '../mongodb/MongoDBService';
export default async function () {
    let statsRollList: StatsRoll[] = [];

    if (collections.statsRolls){
        statsRollList = await collections.statsRolls.find().toArray();
    }
    return JSON.stringify(statsRollList);
}