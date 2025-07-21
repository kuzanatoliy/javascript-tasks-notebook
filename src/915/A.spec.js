const { getCountOfHours } = require('./A');

describe('915A. Garden', () => {
  it.each`
    n    | buckets               | k    | result
    ${1} | ${[2, 3, 5]}          | ${6} | ${2}
    ${2} | ${[1, 2, 3, 4, 5, 6]} | ${7} | ${7}
  `('Base test: $n', ({ buckets, k, result }) => {
    expect(getCountOfHours(buckets, k)).toBe(result);
  });
});
