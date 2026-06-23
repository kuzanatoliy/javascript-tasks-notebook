const { getPositionValue } = require('./B');

describe('1177B. Digits Sequence (Hard Edition)', () => {
  it.each`
    n    | num   | result
    ${1} | ${7}  | ${'7'}
    ${2} | ${21} | ${'5'}
  `('Base test: $n', ({ num, result }) => {
    expect(getPositionValue(num)).toBe(result);
  });
});
