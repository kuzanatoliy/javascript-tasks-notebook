const { getCountOfSubarrs } = require('./B');

describe('1582B. Luntik and Subsequences', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[1n, 2n, 3n, 4n, 5n]} | ${1n}
    ${2} | ${[1000n, 1000n]}       | ${0n}
    ${3} | ${[1n, 0n]}             | ${2n}
    ${4} | ${[3n, 0n, 2n, 1n, 1n]} | ${4n}
    ${5} | ${[2n, 1n, 0n, 3n, 0n]} | ${4n}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSubarrs(arr)).toBe(result);
  });
});
