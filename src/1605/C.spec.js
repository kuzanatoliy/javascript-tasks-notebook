const { getSubstringLength } = require('./C');

describe('1605C. Dominant Character', () => {
  it.each`
    n    | string       | result
    ${1} | ${'aa'}      | ${2}
    ${2} | ${'cbabb'}   | ${-1}
    ${3} | ${'cacabcc'} | ${3}
  `('Base test: $n', ({ string, result }) => {
    expect(getSubstringLength(string)).toBe(result);
  });
});
