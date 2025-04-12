const { getMaxIncome } = require('./A');

describe('1062A. Zoning Restrictions Again', () => {
  it.each`
    n    | num  | h     | restrictions                         | result
    ${1} | ${3} | ${3}  | ${[[1, 1, 1], [2, 2, 3], [3, 3, 2]]} | ${14}
    ${2} | ${4} | ${10} | ${[[2, 3, 8], [3, 4, 7]]}            | ${262}
  `('Base test: $n', ({ num, h, restrictions, result }) => {
    expect(getMaxIncome(num, h, restrictions)).toBe(result);
  });
});
