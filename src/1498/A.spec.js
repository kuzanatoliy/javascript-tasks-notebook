const { getNumber } = require('./A');

describe('1498A. GCD Sum', () => {
  it.each`
    n    | num   | result
    ${1} | ${11} | ${12}
    ${2} | ${31} | ${33}
    ${3} | ${75} | ${75}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumber(num)).toBe(result);
  });
});
