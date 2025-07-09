const { getPassedScore } = require('./B');

describe('1445B. Elimination', () => {
  it.each`
    n    | a    | b    | c    | d    | result
    ${1} | ${1} | ${2} | ${2} | ${1} | ${3}
    ${2} | ${4} | ${8} | ${9} | ${2} | ${12}
  `('Base test: $n', ({ a, b, c, d, x, result }) => {
    expect(getPassedScore(a, b, c, d, x)).toBe(result);
  });
});
