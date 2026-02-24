const { buildString } = require('./B');

describe('805B. 3-palindrome', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${'aa'}
    ${2} | ${3} | ${'aab'}
  `('Base test: $n', ({ num, result }) => {
    expect(buildString(num)).toBe(result);
  });
});
