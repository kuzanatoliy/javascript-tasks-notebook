const { isItPossibleToSplit } = require('./B');

describe('1719A. Chip Game', () => {
  it.each`
    n    | num   | k     | result
    ${1} | ${4}  | ${1}  | ${['YES', [[1, 2], [3, 4]]]}
    ${2} | ${2}  | ${0}  | ${['NO']}
    ${3} | ${12} | ${10} | ${['YES', [[2, 1], [3, 4], [6, 5], [7, 8], [10, 9], [11, 12]]]}
    ${4} | ${14} | ${11} | ${['YES', [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14]]]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isItPossibleToSplit(num, k)).toStrictEqual(result);
  });
});
