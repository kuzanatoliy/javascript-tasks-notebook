const { getNumber } = require('./A');

describe('260A. Adding Digits', () => {
  it.each`
    n    | a      | b      | num   | result
    ${1} | ${5}   | ${4}   | ${5}  | ${'520000'}
    ${2} | ${12}  | ${11}  | ${1}  | ${'121'}
    ${3} | ${260} | ${150} | ${10} | ${-1}
  `('Base test: $n', ({ a, b, num, result }) => {
    expect(getNumber(a, b, num)).toBe(result);
  });
});
