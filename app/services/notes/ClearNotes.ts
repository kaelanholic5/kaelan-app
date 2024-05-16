import { notes } from '../../data/notes/Data';
import { updateDataFile } from './FileService';

export default async function () {
    notes.clear();
    await updateDataFile();
    return JSON.stringify('Successfully Cleared Notes.');
}