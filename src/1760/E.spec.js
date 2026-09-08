const { getPairsCount } = require('./E');

describe('1760E. Binary Inversions', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 0, 1, 0]}             | ${3}
    ${2} | ${[0, 1, 0, 0, 1, 0]}       | ${7}
    ${3} | ${[0, 0]}                   | ${1}
    ${4} | ${[1, 0, 1, 1, 0, 0, 0, 1]} | ${13}
    ${5} | ${[1, 1, 1]}                | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPairsCount(arr)).toBe(result);
  });
});
