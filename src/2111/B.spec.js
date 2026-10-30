const { getMap } = require('./B');

describe('2111B. Fibonacci Cubes', () => {
  it.each`
    n    | num  | arr                                                                   | result
    ${1} | ${5} | ${[[3, 1, 2], [10, 10, 10], [9, 8, 13], [14, 7, 20]]}                 | ${'0010'}
    ${2} | ${2} | ${[[3, 3, 3], [1, 2, 1], [2, 1, 2], [3, 2, 2], [2, 3, 1], [3, 2, 4]]} | ${'100101'}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getMap(num, arr)).toBe(result);
  });
});
