const rollup = require('rollup');
const rollupTypescript = require('@rollup/plugin-typescript');

async function build() {
    const bundle = await rollup.rollup({
        input: [
            'src/background.ts'
        ],
        plugins: [
            rollupTypescript()
        ],
    });


    await bundle.write({
        file: 'build/background.js',
        strict: true,
        format: 'iife'
    });
}

module.exports = build;