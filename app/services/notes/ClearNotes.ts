import { collections } from '../mongodb/MongoDBService';

export default async function () {
    let response;
    if (collections.notes) {
        response = await collections.notes.deleteMany({});
    }
    if (response) {
        return JSON.stringify('Successfully Cleared Notes.');
    }
    return JSON.stringify('There was an issue when clearing Notes.');
}