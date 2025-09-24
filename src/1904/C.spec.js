const { getMinValue } = require('./C');

describe('1904A. Forked!', () => {
  it.each`
    n    | arr                                            | k     | result
    ${1} | ${[3n, 9n, 7n, 15n, 1n]}                       | ${2n} | ${1n}
    ${2} | ${[7n, 4n, 15n, 12n]}                          | ${3n} | ${0n}
    ${3} | ${[42n, 47n, 50n, 54n, 62n, 79n]}              | ${2n} | ${3n}
    ${4} | ${[500000000000000000n, 1000000000000000000n]} | ${1n} | ${500000000000000000n}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMinValue(arr, k)).toBe(result);
  });
});
