const { getMaxSum } = require('./B');

describe('1469B. Red and Blue', () => {
  it.each`
    n    | arrA                    | arrB                    | result
    ${1} | ${[6, -5, 7, -3]}       | ${[2, 3, -4]}           | ${13}
    ${2} | ${[1, 1]}               | ${[10, -3, 2, 2]}       | ${13}
    ${3} | ${[-1, -2, -3, -4, -5]} | ${[-1, -2, -3, -4, -5]} | ${0}
    ${4} | ${[0]}                  | ${[0]}                  | ${0}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxSum(arrA, arrB)).toBe(result);
  });
});
