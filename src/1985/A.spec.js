const { getSwapedWords } = require('./A');

describe('1985A. Creating Words', () => {
  it.each`
    n    | words             | result
    ${1} | ${['bit', 'set']} | ${['sit', 'bet']}
    ${2} | ${['cat', 'dog']} | ${['dat', 'cog']}
    ${3} | ${['hot', 'dog']} | ${['dot', 'hog']}
    ${4} | ${['uwu', 'owo']} | ${['owu', 'uwo']}
    ${5} | ${['cat', 'cat']} | ${['cat', 'cat']}
    ${6} | ${['zzz', 'zzz']} | ${['zzz', 'zzz']}
  `('Base test: $n', ({ words, result }) => {
    expect(getSwapedWords(words)).toStrictEqual(result);
  });
});
