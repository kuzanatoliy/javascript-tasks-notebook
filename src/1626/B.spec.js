const { getMinorReduction } = require('./B');

describe('1626B. Minor Reduction', () => {
  it.each`
    n    | snum       | result
    ${1} | ${'10057'} | ${'10012'}
    ${2} | ${'90'}    | ${'9'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getMinorReduction(snum)).toBe(result);
  });
});
