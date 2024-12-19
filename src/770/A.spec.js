const { getPassword } = require('./A');

describe('770A. New Password', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${4} | ${3} | ${'abca'}
    ${2} | ${6} | ${6} | ${'abcdef'}
    ${3} | ${5} | ${2} | ${'ababa'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPassword(num, k)).toBe(result);
  });
});
