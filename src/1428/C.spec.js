const { getMinLength } = require('./C');

describe('1428C. ABBB', () => {
  it.each`
    n    | map             | result
    ${1} | ${'AAA'}        | ${3}
    ${2} | ${'BABA'}       | ${2}
    ${3} | ${'AABBBABBBB'} | ${0}
    ${4} | ${'BB'}         | ${0}
  `('Base test: $n', ({ map, result }) => {
    expect(getMinLength(map)).toBe(result);
  });
});
