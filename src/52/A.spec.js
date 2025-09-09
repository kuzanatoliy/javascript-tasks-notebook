const { getCountOfReplacements } = require('./A');

describe('52A. 123-sequence', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 3, 2, 2, 2, 1, 1, 2, 3]} | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfReplacements(arr)).toBe(result);
  });
});
