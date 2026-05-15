const { getPolindromeTime } = require('./A');

describe('108A. Palindromic Times', () => {
  it.each`
    n    | time       | result
    ${1} | ${'12:21'} | ${'13:31'}
    ${2} | ${'23:59'} | ${'00:00'}
  `('Base test: $n', ({ time, result }) => {
    expect(getPolindromeTime(time)).toBe(result);
  });
});
