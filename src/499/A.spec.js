const { getCountOfMinutes } = require('./A');

describe('499A. Watching a movie', () => {
  it.each`
    n    | x    | positions             | result
    ${1} | ${3} | ${[[5, 6], [10, 12]]} | ${6}
    ${2} | ${1} | ${[[1, 100000]]}      | ${100000}
  `('Base test: $n', ({ x, positions, result }) => {
    expect(getCountOfMinutes(x, positions)).toBe(result);
  });
});
