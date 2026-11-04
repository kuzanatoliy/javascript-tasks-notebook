const { getStringsCount } = require('./B');

describe('2276B. Replace and Compress', () => {
  it.each`
    n    | str            | result
    ${1} | ${'001'}       | ${1}
    ${2} | ${'000'}       | ${2}
    ${3} | ${'010'}       | ${2}
    ${4} | ${'00010'}     | ${3}
    ${5} | ${'100111011'} | ${3}
    ${6} | ${'001011010'} | ${2}
    ${7} | ${'1111'}      | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getStringsCount(str)).toBe(result);
  });
});
