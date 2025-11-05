const { getCountOfVariants } = require('./A');

describe('610A. Pasha and Stick', () => {
  it.each`
    n    | num   | result
    ${1} | ${6}  | ${1}
    ${2} | ${20} | ${4}
    ${3} | ${3}  | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfVariants(num)).toBe(result);
  });
});
