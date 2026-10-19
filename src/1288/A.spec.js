const { isItPossibleToOptimize } = require('./A');

describe('1287A. Deadline', () => {
  it.each`
    n    | num  | d     | result
    ${1} | ${1} | ${1}  | ${'YES'}
    ${2} | ${4} | ${5}  | ${'YES'}
    ${3} | ${5} | ${11} | ${'NO'}
  `('Base test: $n', ({ num, d, result }) => {
    expect(isItPossibleToOptimize(num, d)).toBe(result);
  });
});
