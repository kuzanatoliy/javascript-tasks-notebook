const { checkDoubleNumbers } = require('./A');

describe('61A. Ultra-Fast Mathematician', () => {
  it.each`
    n    | doubleNumber1 | doubleNumber2 | result
    ${1} | ${'1010100'}  | ${'0100101'}  | ${'1110001'}
    ${2} | ${'000'}      | ${'111'}      | ${'111'}
    ${3} | ${'1110'}     | ${'1010'}     | ${'0100'}
    ${4} | ${'01110'}    | ${'01100'}    | ${'00010'}
  `('Base test: $n', ({ doubleNumber1, doubleNumber2, result }) => {
    expect(checkDoubleNumbers(doubleNumber1, doubleNumber2)).toBe(result);
  });
});
