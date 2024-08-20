const { isItPossibleToRepresentInCoins } = require('./A');

describe('1814A. Coins', () => {
  it.each`
    n    | number | k    | result
    ${1} | ${5}   | ${3} | ${'YES'}
    ${2} | ${6}   | ${1} | ${'YES'}
    ${3} | ${7}   | ${4} | ${'NO'}
    ${4} | ${8}   | ${8} | ${'YES'}
    ${5} | ${4}   | ${3} | ${'YES'}
  `('Base test: $n', ({ number, k, result }) => {
    expect(isItPossibleToRepresentInCoins(number, k)).toBe(result);
  });
});
