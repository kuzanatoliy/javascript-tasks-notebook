const { getCombinations } = require('./A');

describe('894A. QAQ', () => {
  it.each`
    n    | string              | result
    ${1} | ${'QAQAQYSYIOIWIN'} | ${4}
    ${2} | ${'QAQQQZZYNOIWIN'} | ${3}
  `('Base test: $n', ({ string, result }) => {
    expect(getCombinations(string)).toBe(result);
  });
});
