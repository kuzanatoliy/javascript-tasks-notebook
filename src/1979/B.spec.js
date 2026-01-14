const { getLengthOfLongestCommonSubsegment } = require('./B');

describe('1979B. XOR Sequences', () => {
  it.each`
    n    | a            | b           | result
    ${1} | ${0}         | ${1}        | ${1}
    ${2} | ${12}        | ${4}        | ${8}
    ${3} | ${57}        | ${37}       | ${4}
    ${4} | ${316560849} | ${14570961} | ${33554432}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getLengthOfLongestCommonSubsegment(a, b)).toBe(result);
  });
});
