const { isSolutionExisted } = require('./A');

describe('1382A. Common Subsequence', () => {
  it.each`
    n    | number1               | number2            | result
    ${1} | ${[10, 8, 6, 4]}      | ${[1, 2, 3, 4, 5]} | ${['YES', [1, 4]]}
    ${2} | ${[3]}                | ${[3]}             | ${['YES', [1, 3]]}
    ${3} | ${[3]}                | ${[2]}             | ${['NO']}
    ${4} | ${[1000, 2, 2, 2, 3]} | ${[3, 1, 5]}       | ${['YES', [1, 3]]}
    ${5} | ${[1, 2, 3, 4, 5]}    | ${[1, 2, 3, 4, 5]} | ${['YES', [1, 1]]}
  `('Base test: $n', ({ number1, number2, result }) => {
    expect(isSolutionExisted(number1, number2)).toStrictEqual(result);
  });
});
