const {
  getMaxUniqueSubStringLength,
} = require('./get-max-unique-substring-length');

describe('getMaxUniqueSubStringLength', () => {
  it.each`
    n    | str           | result
    ${1} | ${'abcabcbb'} | ${3}
  `('Base test: $n', ({ str, result }) => {
    expect(getMaxUniqueSubStringLength(str)).toBe(result);
  });
});
