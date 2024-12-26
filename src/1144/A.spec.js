const { isDiverseString } = require('./A');

describe('1144A. Diverse Strings', () => {
  it.each`
    n    | str         | result
    ${1} | ${'fced'}   | ${'YES'}
    ${2} | ${'xyz'}    | ${'YES'}
    ${3} | ${'r'}      | ${'YES'}
    ${4} | ${'dabcef'} | ${'YES'}
    ${5} | ${'az'}     | ${'NO'}
    ${6} | ${'aa'}     | ${'NO'}
    ${7} | ${'bad'}    | ${'NO'}
    ${8} | ${'babc'}   | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isDiverseString(str)).toBe(result);
  });
});
