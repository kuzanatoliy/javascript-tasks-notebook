const { getFinalWeight } = require('./A');

describe('1097A. Snowball', () => {
  it.each`
    n    | w    | h    | u1   | d1   | u2   | d2   | result
    ${1} | ${4} | ${3} | ${1} | ${1} | ${1} | ${2} | ${8}
    ${2} | ${4} | ${3} | ${9} | ${2} | ${0} | ${1} | ${1}
  `('Base test: $n', ({ w, h, u1, d1, u2, d2, result }) => {
    expect(getFinalWeight(w, h, u1, d1, u2, d2)).toBe(result);
  });
});
