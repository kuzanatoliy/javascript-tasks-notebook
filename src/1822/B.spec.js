const { getMaxBeauty } = require('./B');

describe('1822B. Karina and Array', () => {
  it.each`
    n    | arr                                    | result
    ${1} | ${[5n, 0n, 2n, 1n]}                    | ${10n}
    ${2} | ${[-1n, 1n, 0n]}                       | ${0n}
    ${3} | ${[2n, 0n, -1n, -4n, 0n]}              | ${4n}
    ${4} | ${[-8n, 4n, 3n, 7n, 1n, -9n]}          | ${72n}
    ${5} | ${[0n, 3n, -2n, 5n, -4n, -4n]}         | ${16n}
    ${6} | ${[1000000000n, 910000000n]}           | ${910000000000000000n}
    ${7} | ${[-1n, -7n, -2n, -5n, -4n, -6n, -3n]} | ${42n}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxBeauty(arr)).toBe(result);
  });
});
