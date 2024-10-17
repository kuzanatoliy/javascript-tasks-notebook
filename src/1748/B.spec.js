const { getCountOfSubarrays } = require('./B');

describe('1748B. Diverse Substrings', () => {
  it.each`
    n    | str                     | result
    ${1} | ${'7'}                  | ${1}
    ${2} | ${'77'}                 | ${2}
    ${3} | ${'1010'}               | ${10}
    ${4} | ${'01100'}              | ${12}
    ${5} | ${'399996'}             | ${10}
    ${6} | ${'23456'}              | ${15}
    ${7} | ${'789987887987998798'} | ${106}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfSubarrays(str)).toBe(result);
  });
});
