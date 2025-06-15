const { getPoints } = require('./A');

describe('2026A. Two Screens', () => {
  it.each`
    n    | x    | y    | k    | result
    ${1} | ${1} | ${1} | ${1} | ${[[0, 0, 1, 1], [1, 0, 0, 1]]}
    ${2} | ${3} | ${4} | ${1} | ${[[0, 0, 3, 3], [3, 0, 0, 3]]}
    ${3} | ${4} | ${3} | ${3} | ${[[0, 0, 3, 3], [3, 0, 0, 3]]}
    ${4} | ${3} | ${4} | ${4} | ${[[0, 0, 3, 3], [3, 0, 0, 3]]}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getPoints(x, y, k)).toStrictEqual(result);
  });
});
