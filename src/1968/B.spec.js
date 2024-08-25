const { getMaxPrefix } = require('./B');

describe('1968B. Prefiquence', () => {
  it.each`
    n    | str1       | str2       | result
    ${1} | ${'10011'} | ${'1110'}  | ${2}
    ${2} | ${'100'}   | ${'110'}   | ${2}
    ${3} | ${'1'}     | ${'111'}   | ${1}
    ${4} | ${'1011'}  | ${'1111'}  | ${1}
    ${5} | ${'100'}   | ${'11010'} | ${3}
    ${6} | ${'100'}   | ${'0'}     | ${0}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getMaxPrefix(str1, str2)).toBe(result);
  });
});
