const { getCountOfGoodPairs } = require('./D');

describe('1324D. Pair of Topics', () => {
  it.each`
    n    | arrA               | arrB               | result
    ${1} | ${[4, 8, 2, 6, 2]} | ${[4, 5, 4, 1, 3]} | ${7}
    ${2} | ${[1, 3, 2, 4]}    | ${[1, 3, 2, 4]}    | ${0}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfGoodPairs(arrA, arrB)).toBe(result);
  });
});
