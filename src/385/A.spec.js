const { getMaxIncome } = require('./A');

describe('384A. Bear and Raspberry', () => {
  it.each`
    n    | c    | arr                         | result
    ${1} | ${1} | ${[5, 10, 7, 3, 20]}        | ${3}
    ${2} | ${2} | ${[100, 1, 10, 40, 10, 40]} | ${97}
    ${3} | ${0} | ${[1, 2, 3]}                | ${0}
  `('Base test: $n', ({ c, arr, result }) => {
    expect(getMaxIncome(c, arr)).toBe(result);
  });
});
