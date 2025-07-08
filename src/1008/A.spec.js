const { isBerlaneseWord } = require('./A');

describe('1008A. Romaji', () => {
  it.each`
    n    | str             | result
    ${1} | ${'sumimasen'}  | ${'YES'}
    ${2} | ${'ninja'}      | ${'YES'}
    ${3} | ${'codeforces'} | ${'NO'}
    ${4} | ${'b'}          | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isBerlaneseWord(str)).toStrictEqual(result);
  });
});
