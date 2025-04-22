const { isMagicNumber } = require('./A');

describe('320A. Magic Numbers', () => {
  it.each`
    n    | snum        | result
    ${1} | ${'114114'} | ${'YES'}
    ${2} | ${'1111'}   | ${'YES'}
    ${3} | ${'441231'} | ${'NO'}
    ${4} | ${'414'}    | ${'NO'}
  `('Base test: $n', ({ snum, result }) => {
    expect(isMagicNumber(snum)).toBe(result);
  });
});
