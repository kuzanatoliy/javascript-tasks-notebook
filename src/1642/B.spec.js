const { getMinPowers } = require('./B');

describe('1642B. Power Walking', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 1, 2]}          | ${[2, 2, 3]}
    ${2} | ${[5, 1, 2, 2, 2, 4]} | ${[4, 4, 4, 4, 5, 6]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinPowers(arr)).toStrictEqual(result);
  });
});
