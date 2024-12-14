const { getMinAmountOfMoney } = require('./A');

describe('1118A. Water Buying', () => {
  it.each`
    n    | num              | a       | b     | result
    ${1} | ${10}            | ${1}    | ${3}  | ${10}
    ${2} | ${7}             | ${3}    | ${2}  | ${9}
    ${3} | ${1}             | ${1000} | ${1}  | ${1000}
    ${4} | ${1000000000000} | ${42}   | ${88} | ${42000000000000}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getMinAmountOfMoney(num, a, b)).toBe(result);
  });
});
