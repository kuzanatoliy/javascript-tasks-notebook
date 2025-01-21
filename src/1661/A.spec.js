const { getMinSum } = require('./A');

describe('1661A. Array Balancing', () => {
  it.each`
    n    | arrA                            | arrB                            | result
    ${1} | ${[3, 3, 10, 10]}               | ${[10, 10, 3, 3]}               | ${0}
    ${2} | ${[1, 2, 3, 4, 5]}              | ${[6, 7, 8, 9, 10]}             | ${8}
    ${3} | ${[72, 101, 108, 108, 111, 44]} | ${[10, 87, 111, 114, 108, 100]} | ${218}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMinSum(arrA, arrB)).toBe(result);
  });
});
