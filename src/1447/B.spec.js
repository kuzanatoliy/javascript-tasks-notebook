const { getMaxSum } = require('./B');

describe('1447B. matrixbers Box', () => {
  it.each`
    n    | matrix                                                                                                        | result
    ${1} | ${[[-1, 1], [-1, -1]]}                                                                                        | ${2}
    ${2} | ${[[0, -1, -2, -3], [-1, -2, -3, -4], [-2, -3, -4, -5]]}                                                      | ${30}
    ${3} | ${[[-6, 1, -4], [-84, -39, 12], [-55, 34, -77], [54, -100, -3], [-58, 50, 37], [16, 68, 78], [-38, -36, 87]]} | ${931}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMaxSum(matrix)).toBe(result);
  });
});
