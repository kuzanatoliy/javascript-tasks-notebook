const { getMaxAmount } = require('./B');

describe('981B. Businessmen Problems', () => {
  it.each`
    n    | set1                         | set2                                | result
    ${1} | ${[[1, 2], [7, 2], [3, 10]]} | ${[[1, 4], [2, 4], [3, 4], [4, 4]]} | ${24}
    ${2} | ${[[1000000000, 239]]}       | ${[[14, 15], [92, 65], [35, 89]]}   | ${408}
  `('Base test: $n', ({ set1, set2, result }) => {
    expect(getMaxAmount(set1, set2)).toBe(result);
  });
});
