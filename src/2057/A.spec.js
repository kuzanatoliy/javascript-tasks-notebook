const { getMaxMexSum } = require('./A');

describe('2050A. Line Breaks', () => {
  it.each`
    n    | r    | c    | result
    ${1} | ${1} | ${1} | ${2}
    ${2} | ${2} | ${2} | ${3}
    ${3} | ${3} | ${5} | ${6}
  `('Base test: $n', ({ r, c, result }) => {
    expect(getMaxMexSum(r, c)).toBe(result);
  });
});
