const { getMinSum } = require('./C');

describe('1106C. Lunar New Year and Number Division', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[8, 5, 2, 3]}       | ${164}
    ${2} | ${[1, 1, 1, 2, 2, 2]} | ${27}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinSum(arr)).toBe(result);
  });
});
