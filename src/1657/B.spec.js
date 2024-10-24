const { getMaxSum } = require('./B');

describe('1657B. XY Sequence', () => {
  it.each`
    n    | num  | B             | x             | y             | result
    ${1} | ${5} | ${100}        | ${1}          | ${30}         | ${15}
    ${2} | ${7} | ${1000000000} | ${1000000000} | ${1000000000} | ${4000000000}
    ${3} | ${4} | ${1}          | ${7}          | ${3}          | ${-10}
  `('Base test: $n', ({ num, B, x, y, result }) => {
    expect(getMaxSum(num, B, x, y)).toBe(result);
  });
});
