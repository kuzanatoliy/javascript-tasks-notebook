const { getMaxValue } = require('./B');

describe('1650B. DIV + MOD', () => {
  it.each`
    n    | l     | r             | a             | result
    ${1} | ${1}  | ${4}          | ${3}          | ${2}
    ${2} | ${5}  | ${8}          | ${4}          | ${4}
    ${3} | ${6}  | ${10}         | ${6}          | ${5}
    ${4} | ${1}  | ${1000000000} | ${1000000000} | ${999999999}
    ${5} | ${10} | ${12}         | ${8}          | ${5}
  `('Base test: $n', ({ l, r, a, result }) => {
    expect(getMaxValue(l, r, a)).toBe(result);
  });
});
