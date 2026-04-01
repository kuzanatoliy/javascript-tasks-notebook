const { getCountOfSubstrs } = require('./A');

describe('2192A. String Rotation Game', () => {
  it.each`
    n    | str         | result
    ${1} | ${'abcd'}   | ${4}
    ${2} | ${'abbc'}   | ${4}
    ${3} | ${'abba'}   | ${3}
    ${4} | ${'abbccc'} | ${4}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfSubstrs(str)).toBe(result);
  });
});
