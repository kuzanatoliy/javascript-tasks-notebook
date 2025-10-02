const { getMinMaxDifference } = require('./B');

describe('2149B. Unconventional Pairs', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2]}                   | ${1}
    ${2} | ${[10, 1, 2, 9]}            | ${1}
    ${3} | ${[3, 8, 9, 3, 3, 2]}       | ${1}
    ${4} | ${[5, 5, 5, 5, 5, 5, 5, 5]} | ${0}
    ${5} | ${[-5, -1, 2, 6]}           | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinMaxDifference(arr)).toBe(result);
  });
});
