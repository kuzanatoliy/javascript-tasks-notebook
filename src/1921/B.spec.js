const { getMinCountOfOperations } = require('./B');

describe('1921B. Arranging Cats', () => {
  it.each`
    n    | str1          | str2          | result
    ${1} | ${'10010'}    | ${'00001'}    | ${2}
    ${2} | ${'1'}        | ${'1'}        | ${0}
    ${3} | ${'000'}      | ${'111'}      | ${3}
    ${4} | ${'0101'}     | ${'1010'}     | ${2}
    ${5} | ${'100'}      | ${'101'}      | ${1}
    ${6} | ${'10011001'} | ${'11111110'} | ${4}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getMinCountOfOperations(str1, str2)).toBe(result);
  });
});
