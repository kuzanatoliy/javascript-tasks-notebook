const { getCountOfSubstring } = require('./C');

describe('1535A. Fair Playoff', () => {
  it.each`
    n    | array          | result
    ${1} | ${'0?10'}      | ${8}
    ${2} | ${'???'}       | ${6}
    ${3} | ${'?10??1100'} | ${25}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfSubstring(array)).toBe(result);
  });
});
