const { isSymmetricString } = require('./A');

describe('420A. Pasha and Hamsters', () => {
  it.each`
    n    | str      | result
    ${1} | ${'AHA'} | ${'YES'}
    ${2} | ${'Z'}   | ${'NO'}
    ${3} | ${'XO'}  | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isSymmetricString(str)).toBe(result);
  });
});
