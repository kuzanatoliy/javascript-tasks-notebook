const { getCountOfOpertions } = require('./B');

describe('2033B. Sakurako and Water', () => {
  it.each`
    n    | matrix                                                                                              | result
    ${1} | ${[[1]]}                                                                                            | ${0}
    ${2} | ${[[-1, 2], [3, 0]]}                                                                                | ${1}
    ${3} | ${[[1, 2, 3], [-2, 1, -1], [0, 0, -1]]}                                                             | ${4}
    ${4} | ${[[1, 1, -1, -1, 3], [-3, 1, 4, 4, -4], [-1, -1, 3, 0, -5], [4, 5, 3, -3, -1], [3, 1, -3, -1, 5]]} | ${19}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfOpertions(matrix)).toBe(result);
  });
});
