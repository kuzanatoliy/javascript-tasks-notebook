const { getTime } = require('./A');

describe('127A. Wasted Time', () => {
  it.each`
    n    | points                                              | k     | result
    ${1} | ${[[0, 0], [10, 0]]}                                | ${1}  | ${0.2}
    ${2} | ${[[3, 1], [-5, 6], [-2, -1], [3, 2], [10, 0]]}     | ${10} | ${6.032163204409265}
    ${3} | ${[[5, 0], [4, 0], [6, 0], [3, 0], [7, 0], [2, 0]]} | ${10} | ${3}
  `('Base test: $n', ({ points, k, result }) => {
    expect(getTime(points, k)).toBe(result);
  });
});
