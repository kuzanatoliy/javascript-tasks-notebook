const { getPoints } = require('./D');

describe('2009C. The Legend of Freya the Frog', () => {
  it.each`
    n    | points                                                                      | result
    ${1} | ${[[1, 0], [1, 1], [3, 0], [5, 0], [2, 1]]}                                 | ${4}
    ${2} | ${[[0, 0], [1, 0], [3, 0]]}                                                 | ${0}
    ${3} | ${[[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [2, 1], [7, 1], [8, 1], [9, 1]]} | ${8}
  `('Base test: $n', ({ points, result }) => {
    expect(getPoints(points)).toBe(result);
  });
});
