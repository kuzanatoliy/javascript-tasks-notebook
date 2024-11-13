const { getTwoCompositeIntegers } = require('./A');

describe('1269A. Equation', () => {
  it.each`
    n    | num    | result
    ${1} | ${1}   | ${[9, 8]}
    ${2} | ${512} | ${[4608, 4096]}
  `('Base test: $n', ({ num, result }) => {
    expect(getTwoCompositeIntegers(num)).toStrictEqual(result);
  });
});
