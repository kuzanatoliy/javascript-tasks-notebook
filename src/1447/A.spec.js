const { getOperations } = require('./A');

describe('1447A. Add Candies', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[1, 2]}
    ${2} | ${3} | ${[1, 2, 3]}
  `('Base test: $n', ({ num, result }) => {
    expect(getOperations(num)).toStrictEqual(result);
  });
});
