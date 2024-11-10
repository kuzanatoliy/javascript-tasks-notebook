const { getCountOfSteps } = require('./A');

describe('1712A. Traveling Salesman Problem', () => {
  it.each`
    n    | boxes                                 | result
    ${1} | ${[[0, -2], [1, 0], [-1, 0], [0, 2]]} | ${12}
    ${2} | ${[[0, 2], [-3, 0], [0, -1]]}         | ${12}
    ${3} | ${[[0, 0]]}                           | ${0}
  `('Base test: $n', ({ boxes, result }) => {
    expect(getCountOfSteps(boxes)).toBe(result);
  });
});
