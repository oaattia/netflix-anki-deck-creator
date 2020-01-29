const fs = require('fs-extra');
const globby = require('globby');

const baseDir = 'src';
let descDir = 'build';

const paths = [
    'icon.png',
    'manifest.json',
    'vendor/jquery.min.js',
].map((path) => `${baseDir}/${path}`);

async function copy() {
    const files = await globby(paths);
    console.log(files);
    const destDir = `${descDir}`;

    for (const file of files) {
        if (!file.startsWith(`${baseDir}/`)) {
            throw new Error(`Unable to handle path "${file}"`);
        }
        const dest = `${destDir}/${file.substring(baseDir.length + 1)}`;
        console.log(file, dest);
        await fs.copy(file, dest);
    }
}

module.exports = copy;
