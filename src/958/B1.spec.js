const { getRemotePlannetsCount } = require('./B1');

describe('958B1. Maximum Control (easy)', () => {
  it.each`
    n    | num  | tuns                                | result
    ${1} | ${5} | ${[[4, 1], [4, 2], [1, 3], [1, 5]]} | ${3}
    ${2} | ${4} | ${[[1, 2], [4, 3], [1, 4]]}         | ${2}
  `('Base test: $n', ({ num, tuns, result }) => {
    expect(getRemotePlannetsCount(num, tuns)).toBe(result);
  });
});
