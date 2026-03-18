const { getMaxStrength } = require('./B');

describe('1834B. Maximum Strength', () => {
  it.each`
    n    | str1                      | str2                      | result
    ${1} | ${'53'}                   | ${'57'}                   | ${4}
    ${2} | ${'179'}                  | ${'239'}                  | ${19}
    ${3} | ${'13'}                   | ${'37'}                   | ${11}
    ${4} | ${'132228'}               | ${'132228'}               | ${0}
    ${5} | ${'54943329752812629795'} | ${'55157581939688863366'} | ${163}
    ${6} | ${'88'}                   | ${'1914'}                 | ${28}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getMaxStrength(str1, str2)).toBe(result);
  });
});
