const { getOperationCount } = require('./B');

describe('1976A. Verify Password', () => {
  it.each`
    n    | arrA            | arrB               | result
    ${1} | ${[2]}          | ${[1, 3]}          | ${3}
    ${2} | ${[3, 3]}       | ${[3, 3, 3]}       | ${1}
    ${3} | ${[4, 2, 1, 2]} | ${[2, 1, 5, 2, 3]} | ${8}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getOperationCount(arrA, arrB)).toBe(result);
  });
});
