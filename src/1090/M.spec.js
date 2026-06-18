const { getMaxSubarrLength } = require('./M');

describe('1090M. The Pleasant Walk', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2, 3, 3, 2, 1, 2, 2]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSubarrLength(arr)).toBe(result);
  });
});
