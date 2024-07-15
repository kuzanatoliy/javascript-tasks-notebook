const { getMaxCountOfBananas } = require('./A');

describe('1992A. Only Pluses', () => {
  it.each`
    n    | array          | result
    ${1} | ${[2, 3, 4]}   | ${100}
    ${2} | ${[10, 1, 10]} | ${600}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxCountOfBananas(array)).toBe(result);
  });
});
