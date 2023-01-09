import { readdirSync, readFileSync } from 'fs';


export interface ITextFile {
    title: string;
    content: string;
}


/**
 * @param {string} directory
 * @returns {ITextFile[]}
 */
export function readPlainTextFiles(directory: string) {
    // validations
    if (!directory) throw new Error('Directory is required.');

    // get files
    const files = readdirSync(directory);
    const texts = [];

    // read stories
    for (const file of files) {
        const title = file.replace('.txt', '');
        const content = readFileSync(`${directory}/${file}`, 'utf-8');
        texts.push({ title, content });
    }

    return texts;
}
