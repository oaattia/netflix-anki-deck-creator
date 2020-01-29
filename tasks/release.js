const copy = require('./copy');
const build = require('./build');

const tasks = [
    copy,
    build
];

async function release() {
    for(const task of tasks) {
        await task();
    }
}

release();