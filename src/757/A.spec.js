const { getCountOfWords } = require('./A');

describe("758A. Gotta Catch Em' All!", () => {
  it.each`
    n    | str                                       | result
    ${1} | ${'Bulbbasaur'}                           | ${1}
    ${2} | ${'F'}                                    | ${0}
    ${3} | ${'aBddulbasaurrgndgbualdBdsagaurrgndbb'} | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfWords(str)).toBe(result);
  });
});
