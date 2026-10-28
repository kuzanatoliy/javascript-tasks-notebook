const { getMaxCount } = require('./B');

describe('1176B. Merge it!', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[3, 1, 2, 3, 1]}       | ${3}
    ${2} | ${[1, 1, 1, 1, 1, 2, 2]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCount(arr)).toBe(result);
  });
});
