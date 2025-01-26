const { getCountOfOperations } = require('./A');

describe('1556A. Ezzat and Two Subsequences', () => {
  it.each`
    n    | c    | d    | result
    ${1} | ${1} | ${2} | ${-1}
    ${2} | ${3} | ${5} | ${2}
    ${3} | ${5} | ${3} | ${2}
    ${4} | ${6} | ${6} | ${1}
    ${5} | ${8} | ${0} | ${2}
    ${6} | ${0} | ${0} | ${0}
  `('Base test: $n', ({ c, d, result }) => {
    expect(getCountOfOperations(c, d)).toBe(result);
  });
});
