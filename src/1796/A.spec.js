const { isSubstr } = require('./A');

describe('1796A. Typical Interview Problem', () => {
  it.each`
    n    | str           | result
    ${1} | ${'FFB'}      | ${'YES'}
    ${2} | ${'BFFBFFBF'} | ${'YES'}
    ${3} | ${'BBB'}      | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isSubstr(str)).toBe(result);
  });
});
