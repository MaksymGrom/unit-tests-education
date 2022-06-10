const sum = require('./sum');

describe('function sum', () => {
    test('sum 2 + 1 to equal 3', () => {
        expect(sum(2, 1)).toBe(3);
    });

    test('sum 2 + -1 to equal 1', () => {
        expect(sum(2, -1)).toBe(1);
    });
});

