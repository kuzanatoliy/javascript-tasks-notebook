const { getPairs } = require('./B');

describe('1051B. Relatively Prime Pairs', () => {
  it.each`
    n    | l     | r     | result
    ${1} | ${1n} | ${8n} | ${[[1n, 2n], [3n, 4n], [5n, 6n], [7n, 8n]]}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getPairs(l, r)).toStrictEqual(result);
  });
});
