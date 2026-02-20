const { isItPossibleToBuildMatrix } = require('./C');

describe('1634C. OKEA', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${1} | ${1} | ${['YES', [[1]]]}
    ${2} | ${2} | ${2} | ${['YES', [[1, 3], [2, 4]]]}
    ${3} | ${3} | ${3} | ${['NO']}
    ${4} | ${3} | ${1} | ${['YES', [[1], [3], [2]]]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isItPossibleToBuildMatrix(num, k)).toStrictEqual(result);
  });
});
