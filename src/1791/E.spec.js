const { getMaxSum } = require('./E');

describe('1791E. Negatives and Positives', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[-1, -1, -1]}         | ${1}
    ${2} | ${[1, 5, -5, 0, 2]}     | ${13}
    ${3} | ${[1, 2, 3]}            | ${6}
    ${4} | ${[-1, 10, 9, 8, 7, 6]} | ${39}
    ${5} | ${[-1, -1]}             | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSum(arr)).toBe(result);
  });
});
