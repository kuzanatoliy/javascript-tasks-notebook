const { getMaxCount } = require('./B');

describe('16B. Burglar and Matches', () => {
  it.each`
    n    | num  | boxes                        | result
    ${1} | ${7} | ${[[5, 10], [2, 5], [3, 6]]} | ${62}
    ${2} | ${3} | ${[[1, 3], [2, 2], [3, 1]]}  | ${7}
  `('Base test: $n', ({ num, boxes, result }) => {
    expect(getMaxCount(num, boxes)).toBe(result);
  });
});
