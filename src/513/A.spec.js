const { getWinner } = require('./A');

describe('513A. Game', () => {
  it.each`
    n    | n1   | n2   | k1   | k2   | result
    ${1} | ${2} | ${2} | ${1} | ${2} | ${'Second'}
    ${2} | ${2} | ${1} | ${1} | ${1} | ${'First'}
  `('Base test: $n', ({ n1, n2, k1, k2, result }) => {
    expect(getWinner(n1, n2, k1, k2)).toBe(result);
  });
});
