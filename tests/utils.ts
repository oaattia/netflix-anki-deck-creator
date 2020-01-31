import {readFile} from 'fs';
import {resolve as resolvePath} from 'path';

// get file content
export function getFile(dirPath: string, fileName: string) {
    return new Promise<string>((resolve, reject) => {
        readFile(resolvePath(__dirname, dirPath, fileName), {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
