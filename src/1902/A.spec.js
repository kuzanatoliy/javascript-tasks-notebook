const { isZeroMoreThanOne } = require('./A');

describe('1902A. Binary Imbalance', () => {
  it.each`
    n    | str     | result
    ${1} | ${'00'} | ${'YES'}
    ${2} | ${'11'} | ${'NO'}
    ${3} | ${'10'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isZeroMoreThanOne(str)).toBe(result);
  });
});
