const { getTransformedNumber } = require('./A');

describe('1350A. Orac and Factors', () => {
  it.each`
    n    | number | count | result
    ${1} | ${5}   | ${1}  | ${10}
    ${2} | ${8}   | ${2}  | ${12}
    ${3} | ${3}   | ${4}  | ${12}
  `('Base test: $n', ({ number, count, result }) => {
    expect(getTransformedNumber(number, count)).toBe(result);
  });
});
