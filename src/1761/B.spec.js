const { getMaxCountOfOperations } = require('./B');

describe('1761B. Elimination of a Ring', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2, 3, 2]} | ${4}
    ${2} | ${[1, 2, 1, 2]} | ${3}
    ${3} | ${[1]}          | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCountOfOperations(arr)).toBe(result);
  });
});
