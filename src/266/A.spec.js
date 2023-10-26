const { stayUniqueStones } = require('./A');

describe('266A. Stones on the Table', () => {
  it.each`
    n    | stones     | result
    ${1} | ${'RRG'}   | ${1}
    ${2} | ${'RRRRR'} | ${4}
    ${3} | ${'BRBG'}  | ${0}
  `('Base test: $n', ({ stones, result }) => {
    expect(stayUniqueStones(stones)).toBe(result);
  });
});
