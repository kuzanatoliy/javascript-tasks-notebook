const { isOptimalReduction } = require('./B');

describe('1712B. Optimal Reduction', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 3, 5, 4]}    | ${'YES'}
    ${2} | ${[1, 2, 3]}       | ${'YES'}
    ${3} | ${[3, 1, 3, 2]}    | ${'NO'}
    ${4} | ${[5, 2, 2, 2, 5]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isOptimalReduction(arr)).toBe(result);
  });
});
