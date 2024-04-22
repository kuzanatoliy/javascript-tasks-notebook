const { getNumberOfGoodSequences } = require('./B');

describe('414B. Mashmokh and ACM', () => {
  it.each`
    n    | n    | k    | result
    ${1} | ${3} | ${2} | ${5}
    ${2} | ${6} | ${4} | ${39}
    ${3} | ${2} | ${1} | ${2}
  `('Base test: $n', ({ n, k, result }) => {
    expect(getNumberOfGoodSequences(n, k)).toBe(result);
  });
});
