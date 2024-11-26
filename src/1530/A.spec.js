const { getCounOfNumbers } = require('./A');

describe('1530A. Binary Decimal', () => {
  it.each`
    n    | snum            | result
    ${1} | ${'121'}        | ${2}
    ${2} | ${'5'}          | ${5}
    ${3} | ${'1000000000'} | ${1}
  `('Base test: $n', ({ snum, result }) => {
    expect(getCounOfNumbers(snum)).toBe(result);
  });
});
