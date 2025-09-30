const { getMaxSum } = require('./B');

describe('1859A. United We Stand', () => {
  it.each`
    n    | arrays                                      | result
    ${1} | ${[[1, 2], [4, 3]]}                         | ${5}
    ${2} | ${[[100, 1, 6]]}                            | ${1}
    ${3} | ${[[1001, 7, 1007, 5], [8, 11, 6], [2, 9]]} | ${19}
  `('Base test: $n', ({ arrays, result }) => {
    expect(getMaxSum(arrays)).toBe(result);
  });
});
