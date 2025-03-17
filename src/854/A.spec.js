const { getIntegers } = require('./A');

describe('854A. Fraction', () => {
  it.each`
    n    | num   | result
    ${1} | ${3}  | ${[1, 2]}
    ${2} | ${4}  | ${[1, 3]}
    ${3} | ${12} | ${[5, 7]}
  `('Base test: $n', ({ num, result }) => {
    expect(getIntegers(num)).toStrictEqual(result);
  });
});
