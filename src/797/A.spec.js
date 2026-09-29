const { getKFactorization } = require('./A');

describe('797A. Mike and palindrome', () => {
  it.each`
    n    | num       | k     | result
    ${1} | ${100000} | ${2}  | ${[2, 50000]}
    ${2} | ${100000} | ${20} | ${[-1]}
    ${3} | ${1024}   | ${5}  | ${[2, 2, 2, 2, 64]}
    ${4} | ${1024}   | ${11} | ${[-1]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getKFactorization(num, k)).toStrictEqual(result);
  });
});
