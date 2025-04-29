const { getCountOfWays } = require('./A');

describe('1339A. Filling Diamonds', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${2}
    ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfWays(num)).toBe(result);
  });
});
