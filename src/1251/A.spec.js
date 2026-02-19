const { getCorrectCharactersSet } = require('./A');

describe('1251A. Broken Keyboard', () => {
  it.each`
    n    | str         | result
    ${1} | ${'a'}      | ${'a'}
    ${2} | ${'zzaaz'}  | ${'z'}
    ${3} | ${'ccff'}   | ${''}
    ${4} | ${'cbddbb'} | ${'bc'}
  `('Base test: $n', ({ str, result }) => {
    expect(getCorrectCharactersSet(str)).toBe(result);
  });
});
