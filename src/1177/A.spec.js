const { getPositionValue } = require('./A');

describe('1177A. Digits Sequence (Easy Edition)', () => {
  it.each`
    n    | num   | result
    ${1} | ${7}  | ${'7'}
    ${2} | ${21} | ${'5'}
  `('Base test: $n', ({ num, result }) => {
    expect(getPositionValue(num)).toBe(result);
  });
});
