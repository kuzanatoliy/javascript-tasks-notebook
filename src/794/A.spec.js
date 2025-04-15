const { getCountOfBanknotes } = require('./A');

describe('794A. Bank Robbery', () => {
  it.each`
    n    | a    | b    | c    | arr                         | result
    ${1} | ${5} | ${3} | ${7} | ${[4, 7, 5, 5, 3, 6, 2, 8]} | ${4}
    ${2} | ${6} | ${5} | ${7} | ${[1, 5, 7, 92, 3]}         | ${0}
    ${3} | ${3} | ${2} | ${4} | ${[3]}                      | ${1}
  `('Base test: $n', ({ a, b, c, arr, result }) => {
    expect(getCountOfBanknotes(a, b, c, arr)).toBe(result);
  });
});
