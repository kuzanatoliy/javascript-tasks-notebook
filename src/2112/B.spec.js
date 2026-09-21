const { getOperationsCount } = require('./B');

describe('2112B. Shrinking Array', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 3, 3, 7]} | ${0}
    ${2} | ${[6, 9]}       | ${-1}
    ${3} | ${[3, 1, 3, 7]} | ${1}
    ${4} | ${[1, 3, 5, 2]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCount(arr)).toBe(result);
  });
});
