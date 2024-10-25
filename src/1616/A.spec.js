const { getCountOfVariants } = require('./A');

describe('1616A. Integer Diversity', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 1, 2, 2]} | ${4}
    ${2} | ${[1, 2, 3]}    | ${3}
    ${3} | ${[0, 0]}       | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfVariants(arr)).toBe(result);
  });
});
