const { getCountOfCoins } = require('./B');

describe('546B. Soldier and Badges', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 3, 1, 4]}    | ${1}
    ${2} | ${[1, 2, 3, 2, 5]} | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfCoins(array)).toBe(result);
  });
});
