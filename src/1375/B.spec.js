const { isItPossibleToGetGoodGrid } = require('./B');

describe('1375B. Neighbor Grid', () => {
  it.each`
    n    | grid                                                        | result
    ${1} | ${[[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]}               | ${['YES', [[2, 3, 3, 2], [3, 4, 4, 3], [2, 3, 3, 2]]]}
    ${2} | ${[[3, 0], [0, 0]]}                                         | ${['NO']}
    ${3} | ${[[0, 0], [0, 0]]}                                         | ${['YES', [[2, 2], [2, 2]]]}
    ${4} | ${[[0, 0, 0], [0, 4, 0]]}                                   | ${['NO']}
    ${5} | ${[[0, 0, 0, 0], [0, 2, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]]} | ${['YES', [[2, 3, 3, 2], [3, 4, 4, 3], [3, 4, 4, 3], [2, 3, 3, 2]]]}
  `('Base test: $n', ({ grid, result }) => {
    expect(isItPossibleToGetGoodGrid(grid)).toStrictEqual(result);
  });
});
