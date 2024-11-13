const { isItPossibleToChangeArray } = require('./A');

describe('1708A. Difference Operations', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[5, 10]}                     | ${'YES'}
    ${2} | ${[1, 2, 3]}                   | ${'YES'}
    ${3} | ${[1, 1, 1, 1]}                | ${'YES'}
    ${4} | ${[9, 9, 8, 2, 4, 4, 3, 5, 3]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToChangeArray(arr)).toBe(result);
  });
});
