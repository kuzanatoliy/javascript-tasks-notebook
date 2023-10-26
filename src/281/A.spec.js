const { capitalizeWord } = require('./A');

describe('282A. Word Capitalization', () => {
  it.each`
    n    | word        | result
    ${1} | ${'ApPLe'}  | ${'ApPLe'}
    ${2} | ${'konjac'} | ${'Konjac'}
  `('Base test: $n', ({ word, result }) => {
    expect(capitalizeWord(word)).toBe(result);
  });
});
