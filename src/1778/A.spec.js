const { getMaxSum } = require('./A');

describe('1778A. Make it Beautiful', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[-1, 1, 1, -1, -1]} | ${3}
    ${2} | ${[1, 1, -1, -1, -1]} | ${3}
    ${3} | ${[1, 1]}             | ${-2}
    ${4} | ${[1, -1, -1, 1]}     | ${4}
    ${5} | ${[1, 1, -1]}         | ${1}
    ${6} | ${[1, 1, 1]}          | ${-1}
    ${7} | ${[-1, 1, 1]}         | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxSum(array)).toBe(result);
  });
});
