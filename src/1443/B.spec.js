const { getCountOfCoins } = require('./B');

describe('1443B. Saving the City', () => {
  it.each`
    n    | map           | a    | b    | result
    ${1} | ${'01000010'} | ${1} | ${1} | ${2}
    ${2} | ${'01101110'} | ${5} | ${1} | ${6}
  `('Base test: $n', ({ map, a, b, result }) => {
    expect(getCountOfCoins(map, a, b)).toBe(result);
  });
});
