const { getOptimalCost } = require('./B');

describe('616B. Dinner with Emma', () => {
  it.each`
    n    | matrix                                        | result
    ${1} | ${[[4, 1, 3, 5], [2, 2, 2, 2], [5, 4, 5, 1]]} | ${2}
    ${2} | ${[[1, 2, 3], [2, 3, 1], [3, 1, 2]]}          | ${1}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getOptimalCost(matrix)).toBe(result);
  });
});
