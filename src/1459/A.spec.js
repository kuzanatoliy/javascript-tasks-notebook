const { whoHasHigherChance } = require('./A');

describe('1459A. Red-Blue Shuffle', () => {
  it.each`
    n    | map1       | map2       | result
    ${1} | ${'777'}   | ${'111'}   | ${'RED'}
    ${2} | ${'314'}   | ${'159'}   | ${'BLUE'}
    ${3} | ${'09281'} | ${'09281'} | ${'EQUAL'}
  `('Base test: $n', ({ map1, map2, result }) => {
    expect(whoHasHigherChance(map1, map2)).toBe(result);
  });
});
