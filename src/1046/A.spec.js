const { getGoodStringLength } = require('./A');

describe('1046A. Love "A"', () => {
  it.each`
    n    | str          | result
    ${1} | ${'xaxxxxa'} | ${3}
    ${2} | ${'aaabaa'}  | ${6}
  `('Base test: $n', ({ str, result }) => {
    expect(getGoodStringLength(str)).toBe(result);
  });
});
