const { getCount } = require('./B');

describe('284B. Cows and Poker Game', () => {
  it.each`
    n    | map         | result
    ${1} | ${'AFFAAA'} | ${4}
    ${2} | ${'AFI'}    | ${1}
  `('Base test: $n', ({ map, result }) => {
    expect(getCount(map)).toBe(result);
  });
});
