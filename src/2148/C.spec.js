const { getCountOfPoints } = require('./C');

describe('2148C. Pacer', () => {
  it.each`
    n    | points                              | max  | result
    ${1} | ${[[2, 1], [4, 0]]}                 | ${4} | ${2}
    ${2} | ${[[1, 1], [4, 0]]}                 | ${7} | ${7}
    ${3} | ${[[1, 0], [2, 0], [6, 1], [9, 0]]} | ${9} | ${6}
  `('Base test: $n', ({ points, max, result }) => {
    expect(getCountOfPoints(points, max)).toBe(result);
  });
});
