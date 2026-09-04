const { getVariantsCount } = require('./B');

describe('2256B. Domino Tiles', () => {
  it.each`
    n    | str           | result
    ${1} | ${'??'}       | ${4}
    ${2} | ${'0?1??'}    | ${2}
    ${3} | ${'0?0??'}    | ${0}
    ${4} | ${'00110011'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getVariantsCount(str)).toBe(result);
  });
});
