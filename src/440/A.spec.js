const { getGap } = require('./A');

describe('440A. Forgotten Episode', () => {
  it.each`
    n    | array              | result
    ${1} | ${[0, 4, 5, 1, 0]} | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getGap(array)).toBe(result);
  });
});
