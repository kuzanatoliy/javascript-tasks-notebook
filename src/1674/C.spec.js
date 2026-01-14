const { getCountOfVariants } = require('./C');

describe('1674C. Infinite Replacement', () => {
  it.each`
    n    | str       | rep      | result
    ${1} | ${'aaaa'} | ${'a'}   | ${1}
    ${2} | ${'aa'}   | ${'abc'} | ${-1}
    ${3} | ${'a'}    | ${'b'}   | ${2}
  `('Base test: $n', ({ str, rep, result }) => {
    expect(getCountOfVariants(str, rep)).toBe(result);
  });
});
