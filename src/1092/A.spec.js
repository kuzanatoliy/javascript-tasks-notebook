const { getString } = require('./A');

describe('1092A. Uniform String', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${7} | ${3} | ${'abcabca'}
    ${2} | ${4} | ${4} | ${'abcd'}
    ${3} | ${6} | ${2} | ${'ababab'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getString(num, k)).toBe(result);
  });
});
