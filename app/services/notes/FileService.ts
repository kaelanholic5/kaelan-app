import * as fs from 'fs';
import { notes } from '../../data/notes/Data';

const noteFileString: string = '/app/data/notes/notes.json';
const filePath: string = process.cwd();
export async function updateDataFile() {
    try{ 
        await fs.writeFileSync(`${filePath}${noteFileString}`, JSON.stringify([...notes.values()]));
    } catch(err) {
        console.log(err);
    }
}