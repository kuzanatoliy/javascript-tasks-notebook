const { getMaxSubSet } = require('./A');

describe('1136A. Sushi for Two', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[2, 2, 2, 1, 1, 2, 2]}       | ${4}
    ${2} | ${[1, 2, 1, 2, 1, 2]}          | ${2}
    ${3} | ${[2, 2, 1, 1, 1, 2, 2, 2, 2]} | ${6}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSubSet(arr)).toBe(result);
  });
});
