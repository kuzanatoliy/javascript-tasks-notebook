const { canRecordsBeConsistens } = require('./A');

describe('1013A. Piles With Stones', () => {
  it.each`
    n    | arr1               | arr2               | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${[2, 1, 4, 3, 5]} | ${'YES'}
    ${2} | ${[1, 1, 1, 1, 1]} | ${[1, 0, 1, 0, 1]} | ${'YES'}
    ${3} | ${[2, 3, 9]}       | ${[1, 7, 9]}       | ${'NO'}
  `('Base test: $n', ({ arr1, arr2, result }) => {
    expect(canRecordsBeConsistens(arr1, arr2)).toBe(result);
  });
});
