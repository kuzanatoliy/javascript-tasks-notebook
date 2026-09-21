const { isItPossibleToOptimize } = require('./A');

describe('798A. Carrot Cakes', () => {
  it.each`
    n    | num   | t    | k     | d    | result
    ${1} | ${8}  | ${6} | ${4}  | ${5} | ${'YES'}
    ${2} | ${8}  | ${6} | ${4}  | ${6} | ${'NO'}
    ${3} | ${10} | ${3} | ${11} | ${4} | ${'NO'}
    ${4} | ${4}  | ${2} | ${1}  | ${4} | ${'YES'}
  `('Base test: $n', ({ num, t, k, d, result }) => {
    expect(isItPossibleToOptimize(num, t, k, d)).toBe(result);
  });
});
