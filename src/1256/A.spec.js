const { isItPossibleToGetPaymentWithoutChange } = require('./A');

describe('1256A. Payment Without Change', () => {
  it.each`
    n    | a    | b    | num  | s     | result
    ${1} | ${1} | ${2} | ${3} | ${4}  | ${'YES'}
    ${2} | ${1} | ${2} | ${3} | ${6}  | ${'NO'}
    ${3} | ${5} | ${2} | ${6} | ${27} | ${'NO'}
    ${4} | ${3} | ${3} | ${5} | ${18} | ${'YES'}
  `('Base test: $n', ({ a, b, num, s, result }) => {
    expect(isItPossibleToGetPaymentWithoutChange(a, b, num, s)).toBe(result);
  });
});
