const { getMinNumber } = require('./A');

describe('976A. Minimum Binary Number', () => {
  it.each`
    n    | snum      | result
    ${1} | ${'1001'} | ${'100'}
    ${2} | ${'1'}    | ${'1'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getMinNumber(snum)).toBe(result);
  });
});
