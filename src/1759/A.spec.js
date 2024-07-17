const { isYes } = require('./A');

describe('1759A. Yes-Yes?', () => {
  it.each`
    n     | string                   | result
    ${1}  | ${'YES'}                 | ${'NO'}
    ${2}  | ${'esYes'}               | ${'YES'}
    ${3}  | ${'codeforces'}          | ${'NO'}
    ${4}  | ${'es'}                  | ${'YES'}
    ${5}  | ${'se'}                  | ${'NO'}
    ${6}  | ${'YesY'}                | ${'YES'}
    ${7}  | ${'esYesYesYesYesYesYe'} | ${'YES'}
    ${8}  | ${'seY'}                 | ${'NO'}
    ${9}  | ${'Yess'}                | ${'NO'}
    ${10} | ${'sY'}                  | ${'YES'}
    ${11} | ${'o'}                   | ${'NO'}
    ${12} | ${'Yes'}                 | ${'YES'}
  `('Base test: $n', ({ string, result }) => {
    expect(isYes(string)).toBe(result);
  });
});
