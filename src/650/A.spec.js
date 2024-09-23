const { getCountOfPairs } = require('./A');

describe('650A. Watchmen', () => {
  it.each`
    n    | pairs                                                | result
    ${1} | ${[[1, 1], [7, 5], [1, 5]]}                          | ${2}
    ${2} | ${[[0, 0], [0, 1], [0, 2], [-1, 1], [0, 1], [1, 1]]} | ${11}
  `('Base test: $n', ({ pairs, result }) => {
    expect(getCountOfPairs(pairs)).toBe(result);
  });
});
