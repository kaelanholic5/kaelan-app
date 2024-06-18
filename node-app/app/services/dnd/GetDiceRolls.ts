import { DiceRoll } from '../../types/dnd/DiceRoll';
import { collections } from '../mongodb/MongoDBService';
export default async function () {
    let diceRollList: DiceRoll[] = [];

    if (collections.diceRolls){
        diceRollList = await collections.diceRolls.find().toArray();
    }
    return JSON.stringify(diceRollList);
}