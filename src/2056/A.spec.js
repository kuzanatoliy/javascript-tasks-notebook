const { getPerimeter } = require('./A');

describe('2056A. Shape Perimeter', () => {
  it.each`
    n    | steps                                               | side | result
    ${1} | ${[[1, 1], [2, 2], [2, 1], [1, 2]]}                 | ${3} | ${32}
    ${2} | ${[[1, 1]]}                                         | ${2} | ${8}
    ${3} | ${[[3, 6], [1, 1], [3, 1], [6, 6], [5, 4], [6, 1]]} | ${7} | ${96}
  `('Base test: $n', ({ steps, side, result }) => {
    expect(getPerimeter(steps, side)).toBe(result);
  });
});
