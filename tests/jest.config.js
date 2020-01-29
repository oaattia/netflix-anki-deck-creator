module.exports = {
    verbose: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts(x?)$': 'ts-jest'
    },
    testRegex: 'tests/.*\\.tests\\.ts(x?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    globals: {
        'ts-jest': {
            tsConfig: './tests/tsconfig.json'
        }
    }
};
