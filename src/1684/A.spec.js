const { getMinNum } = require('./A');

describe('1684A. Digit Minimization', () => {
  it.each`
    n    | snum           | result
    ${1} | ${'12'}        | ${'2'}
    ${2} | ${'132'}       | ${'1'}
    ${3} | ${'487456398'} | ${'3'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getMinNum(snum)).toBe(result);
  });
});
