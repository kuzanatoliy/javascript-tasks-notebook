const { getMaxCountOfCoins } = require('./A');

describe('2024A. Profitable Interest Rate', () => {
  it.each`
    n    | a     | b      | result
    ${1} | ${10} | ${5}   | ${10}
    ${2} | ${7}  | ${9}   | ${5}
    ${3} | ${5}  | ${100} | ${0}
    ${4} | ${1}  | ${1}   | ${1}
    ${5} | ${1}  | ${2}   | ${0}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getMaxCountOfCoins(a, b)).toBe(result);
  });
});
