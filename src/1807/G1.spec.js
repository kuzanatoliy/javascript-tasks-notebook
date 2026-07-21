const { isItPossibleToBuild } = require('./G1');

describe('1807G1. Subsequence Addition (Easy Version)', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1]}             | ${'YES'}
    ${2} | ${[2]}             | ${'NO'}
    ${1} | ${[5, 1, 3, 2, 1]} | ${'YES'}
    ${2} | ${[7, 1, 5, 2, 1]} | ${'NO'}
    ${1} | ${[1, 1, 1]}       | ${'YES'}
    ${2} | ${[1, 1, 4, 2, 1]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToBuild(arr)).toBe(result);
  });
});
