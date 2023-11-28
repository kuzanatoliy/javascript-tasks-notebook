const { checkUniqueLetters } = require('./A');

describe('443A. Anton and Letters', () => {
  it.each`
    n    | letters           | result
    ${1} | ${'{a, b, c}'}    | ${3}
    ${2} | ${'{b, a, b, a}'} | ${2}
    ${2} | ${'{}'}           | ${0}
  `('Base test: $n', ({ letters, result }) => {
    expect(checkUniqueLetters(letters)).toBe(result);
  });

  it.each`
    n    | letters  | result
    ${1} | ${'{a}'} | ${1}
  `('Special test: $n', ({ letters, result }) => {
    expect(checkUniqueLetters(letters)).toBe(result);
  });
});
