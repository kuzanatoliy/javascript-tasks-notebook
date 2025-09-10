const { getMaxSum } = require('./A');

describe('631A. Interview', () => {
  it.each`
    n    | arrA                                | arrB                                | result
    ${1} | ${[1, 2, 4, 3, 2]}                  | ${[2, 3, 3, 12, 1]}                 | ${22}
    ${2} | ${[13, 2, 7, 11, 8, 4, 9, 8, 5, 1]} | ${[5, 7, 18, 9, 2, 3, 0, 11, 8, 6]} | ${46}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxSum(arrA, arrB)).toBe(result);
  });
});
