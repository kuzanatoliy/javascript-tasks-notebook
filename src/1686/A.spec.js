const { isItPossibleToTurnArray } = require('./A');

describe('1688A. Everything Everywhere All But One', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[42, 42, 42]}    | ${'YES'}
    ${2} | ${[1, 2, 3, 4, 5]} | ${'YES'}
    ${3} | ${[4, 3, 2, 1]}    | ${'NO'}
    ${4} | ${[24, 2, 22]}     | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTurnArray(arr)).toBe(result);
  });
});
