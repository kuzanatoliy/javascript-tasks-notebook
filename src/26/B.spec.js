const { getLength } = require('./B');

describe('26B. Regular Bracket Sequence', () => {
  it.each`
    n    | string       | result
    ${1} | ${'(()))('}  | ${4}
    ${2} | ${'((()())'} | ${6}
  `('Base test: $n', ({ string, result }) => {
    expect(getLength(string)).toBe(result);
  });
});
