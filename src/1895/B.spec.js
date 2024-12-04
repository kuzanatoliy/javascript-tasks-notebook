const { getPoints } = require('./B');

describe('1895B. Points and Minimum Distance', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[15, 1, 10, 5]}           | ${[[1, 10], [5, 15]]}
    ${2} | ${[10, 30, 20, 20, 30, 10]} | ${[[10, 20], [10, 30], [20, 30]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPoints(arr)).toStrictEqual(result);
  });
});
