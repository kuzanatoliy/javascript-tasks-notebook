const { getCountOfVariants } = require('./A');

describe('1082A. Filling Shapes', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${4}
    ${2} | ${1} | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfVariants(num)).toBe(result);
  });
});
