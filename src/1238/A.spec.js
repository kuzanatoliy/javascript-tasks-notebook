const { isItPossibleToChoosePrimeNumber } = require('./A');

describe('1238A. Prime Subtraction', () => {
  it.each`
    n    | x                       | y      | result
    ${1} | ${100n}                 | ${98n} | ${'YES'}
    ${2} | ${42n}                  | ${32n} | ${'YES'}
    ${3} | ${1000000000000000000n} | ${1n}  | ${'YES'}
    ${4} | ${41n}                  | ${40n} | ${'NO'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossibleToChoosePrimeNumber(x, y)).toBe(result);
  });
});
