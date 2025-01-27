const { isItPossibleToWin } = require('./A');

describe('2055A. Two Frogs', () => {
  it.each`
    n    | num  | a    | b    | result
    ${1} | ${2} | ${1} | ${2} | ${'NO'}
    ${2} | ${3} | ${3} | ${1} | ${'YES'}
    ${3} | ${4} | ${2} | ${3} | ${'NO'}
    ${4} | ${5} | ${2} | ${4} | ${'YES'}
    ${5} | ${7} | ${6} | ${2} | ${'YES'}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(isItPossibleToWin(num, a, b)).toBe(result);
  });
});
