const { getMaxValue } = require('./B');

describe('447B. DZY Loves Strings', () => {
  it.each`
    n    | str      | k    | ws                                                                                | result
    ${1} | ${'abc'} | ${3} | ${[1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${41}
  `('Base test: $n', ({ str, k, ws, result }) => {
    expect(getMaxValue(str, k, ws)).toBe(result);
  });
});
