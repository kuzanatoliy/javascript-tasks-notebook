const { getYears } = require('./A');

describe('919A. Supermarket', () => {
  it.each`
    n    | kilos | supermarkets                | result
    ${1} | ${5}  | ${[[1, 2], [3, 4], [1, 3]]} | ${1.6666666666666665}
    ${2} | ${1}  | ${[[99, 100], [98, 99]]}    | ${0.98989898989899}
  `('Base test: $n', ({ kilos, supermarkets, result }) => {
    expect(getYears(kilos, supermarkets)).toBe(result);
  });
});
