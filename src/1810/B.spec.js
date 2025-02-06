const { getOperationOrder } = require('./B');

describe('1810B. Candies', () => {
  it.each`
    n    | num   | result
    ${1} | ${4}  | ${-1}
    ${2} | ${2}  | ${-1}
    ${3} | ${3}  | ${[2]}
    ${4} | ${7}  | ${[2, 2]}
    ${5} | ${17} | ${[2, 1, 1, 1]}
    ${6} | ${11} | ${[2, 1, 2]}
  `('Base test: $n', ({ num, result }) => {
    expect(getOperationOrder(num)).toStrictEqual(result);
  });
});
