const { getMaxLength } = require('./D');

describe('1624D. Palindromes Coloring', () => {
  it.each`
    n     | string           | k    | result
    ${1}  | ${'bxyaxzay'}    | ${2} | ${3}
    ${2}  | ${'aaaaaa'}      | ${3} | ${2}
    ${3}  | ${'abcdef'}      | ${1} | ${1}
    ${4}  | ${'abcdef'}      | ${6} | ${1}
    ${5}  | ${'dxd'}         | ${2} | ${1}
    ${6}  | ${'abcabcabcac'} | ${2} | ${5}
    ${7}  | ${'sipkic'}      | ${6} | ${1}
    ${8}  | ${'eatoohd'}     | ${2} | ${1}
    ${9}  | ${'llw'}         | ${1} | ${3}
    ${10} | ${'bfvfbv'}      | ${2} | ${3}
  `('Base test: $n', ({ string, k, result }) => {
    expect(getMaxLength(string, k)).toBe(result);
  });
});
