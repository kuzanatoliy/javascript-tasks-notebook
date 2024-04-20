const { getDigits } = require('./A');

describe('1950A. Stair, Peak, or Neither?', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${1} | ${2} | ${3} | ${'STAIR'}
    ${2} | ${3} | ${2} | ${1} | ${'NONE'}
    ${3} | ${1} | ${5} | ${3} | ${'PEAK'}
    ${4} | ${3} | ${4} | ${1} | ${'PEAK'}
    ${5} | ${0} | ${0} | ${0} | ${'NONE'}
    ${6} | ${4} | ${1} | ${7} | ${'NONE'}
    ${7} | ${4} | ${5} | ${7} | ${'STAIR'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getDigits(a, b, c)).toBe(result);
  });
});
