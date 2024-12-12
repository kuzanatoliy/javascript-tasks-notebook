const { getMinCountOfSubsegments } = require('./B');

describe('1771A. Hossam and Combinatorics', () => {
  it.each`
    n    | num  | pairs               | result
    ${1} | ${3} | ${[[1, 3], [2, 3]]} | ${4}
    ${2} | ${4} | ${[[1, 2], [2, 3]]} | ${5}
  `('Base test: $n', ({ num, pairs, result }) => {
    expect(getMinCountOfSubsegments(num, pairs)).toBe(result);
  });
});
