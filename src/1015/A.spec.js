const { getPoints } = require('./A');

describe('1015A. Points in Segments', () => {
  it.each`
    n    | points                      | m    | result
    ${1} | ${[[2, 2], [1, 2], [5, 5]]} | ${5} | ${[3, 4]}
    ${2} | ${[[1, 7]]}                 | ${7} | ${[]}
  `('Base test: $n', ({ points, m, result }) => {
    expect(getPoints(points, m)).toStrictEqual(result);
  });
});
