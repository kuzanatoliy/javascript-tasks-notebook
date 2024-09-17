const { isOriginalSquere } = require('./B');

describe('2008B. Square or Not', () => {
  it.each`
    n    | str               | result
    ${1} | ${'11'}           | ${'NO'}
    ${2} | ${'1111'}         | ${'YES'}
    ${3} | ${'111101111'}    | ${'YES'}
    ${4} | ${'111111111'}    | ${'NO'}
    ${5} | ${'111110011111'} | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isOriginalSquere(str)).toBe(result);
  });
});
