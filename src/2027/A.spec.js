const { getMinPerimeter } = require('./A');

describe('2027A. Rectangle Arrangement', () => {
  it.each`
    n    | stamps                                      | result
    ${1} | ${[[1, 5], [2, 4], [3, 3], [4, 2], [5, 1]]} | ${20}
    ${2} | ${[[2, 2], [1, 1], [1, 2]]}                 | ${8}
    ${3} | ${[[3, 2]]}                                 | ${10}
    ${4} | ${[[100, 100], [100, 100], [100, 100]]}     | ${400}
    ${5} | ${[[1, 4], [2, 3], [1, 5], [3, 2]]}         | ${16}
  `('Base test: $n', ({ stamps, result }) => {
    expect(getMinPerimeter(stamps)).toBe(result);
  });
});
