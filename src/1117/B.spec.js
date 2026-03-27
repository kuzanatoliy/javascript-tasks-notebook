const { getMaxHappiness } = require('./B');

describe('1117B. Emotes', () => {
  it.each`
    n    | m              | k     | arr                                       | result
    ${1} | ${9n}          | ${2n} | ${[1n, 3n, 3n, 7n, 4n, 2n]}               | ${54n}
    ${2} | ${1000000000n} | ${1n} | ${[1000000000n, 987654321n, 1000000000n]} | ${1000000000000000000n}
  `('Base test: $n', ({ m, k, arr, result }) => {
    expect(getMaxHappiness(m, k, arr)).toBe(result);
  });
});
