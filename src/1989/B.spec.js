const { getResultStringLength } = require('./B');

describe('1986B. Substring and Subsequence', () => {
  it.each`
    n    | strA         | strB        | result
    ${1} | ${'aba'}     | ${'cb'}     | ${4}
    ${2} | ${'er'}      | ${'cf'}     | ${4}
    ${3} | ${'mmm'}     | ${'mmm'}    | ${3}
    ${4} | ${'contest'} | ${'test'}   | ${7}
    ${5} | ${'cde'}     | ${'abcefg'} | ${7}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(getResultStringLength(strA, strB)).toBe(result);
  });
});
