const { isItPossibleToSort } = require('./B');

describe('1557B. Moamen and k-subk, arrs', () => {
  it.each`
    n    | k    | arr                | result
    ${1} | ${4} | ${[6, 3, 4, 2, 1]} | ${'YES'}
    ${2} | ${2} | ${[1, -4, 0, -2]}  | ${'NO'}
    ${3} | ${1} | ${[1, 2, 3, 4, 5]} | ${'YES'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(isItPossibleToSort(k, arr)).toBe(result);
  });
});
