import { ObjectId } from 'mongodb';
import { collections } from '../mongodb/MongoDBService';

export default async function (id: string) {
    const query = { _id: new ObjectId(id) };
    let response;
    if (collections.notes) {
        response = await collections.notes.deleteOne(query);
    }
    if (response && response.deletedCount) {
        return JSON.stringify(`Successfully Deleted Note ${id}`);
    } else if (!response) {
        return JSON.stringify(`There was an issue with deleting Note ${id}`);
    } else if (!response.deletedCount) {
        return JSON.stringify(`There was no Note found with id ${id}`);
    }    
}