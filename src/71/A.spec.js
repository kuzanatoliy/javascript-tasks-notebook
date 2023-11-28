const { convertLongWord } = require('./A');

describe('71A. Way Too Long Words', () => {
  it.each`
    n    | word                                               | result
    ${1} | ${'word'}                                          | ${'word'}
    ${2} | ${'localization'}                                  | ${'l10n'}
    ${3} | ${'internationalization'}                          | ${'i18n'}
    ${4} | ${'pneumonoultramicroscopicsilicovolcanoconiosis'} | ${'p43s'}
  `('Base test: $n', ({ word, result }) => {
    expect(convertLongWord(word)).toBe(result);
  });
});
