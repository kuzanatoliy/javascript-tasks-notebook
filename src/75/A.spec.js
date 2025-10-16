const { isItPossibleToRemoveZero } = require('./A');

describe('75A. Life Without Zeros', () => {
  it.each`
    n    | num1      | num2   | result
    ${1} | ${101}    | ${102} | ${'YES'}
    ${2} | ${105}    | ${106} | ${'NO'}
    ${3} | ${110036} | ${43}  | ${'YES'}
    ${4} | ${6}      | ${4}   | ${'NO'}
  `('Base test: $n', ({ num1, num2, result }) => {
    expect(isItPossibleToRemoveZero(num1, num2)).toBe(result);
  });
});
