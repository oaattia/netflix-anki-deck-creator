import {readFile} from 'fs';
import {resolve as resolvePath} from 'path';
import {getSubtitle} from '../src/split';

function getFile(fileName) {
    return new Promise<string>((resolve, reject) => {
        readFile(resolvePath(__dirname, './dump/', fileName), {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}


test('test should split string', () => {
    let words = getSubtitle('foo bar');
   expect(words[0]).toEqual('foo');
   expect(words[1]).toEqual('bar');
});


test('test should split string with characters', () => {
    let words = getSubtitle('.,,foo$ bar%');
   expect(words[0]).toEqual('foo');
   expect(words[1]).toEqual('bar');
});



// test('Test Sample', async () => {
//     const file = await getFile('1.html');
//
//     console.log(getSubtitle('hello my friend'));
// });
