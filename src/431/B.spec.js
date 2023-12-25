const { getMaxTotalHappiness } = require('./B');

describe('431B. Shower Line', () => {
  it.each`
    n    | matrix                                                                                                 | result
    ${1} | ${[[0, 0, 0, 0, 9], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [7, 0, 0, 0, 0]]}               | ${32}
    ${2} | ${[[0, 43, 21, 18, 2], [3, 0, 21, 11, 65], [5, 2, 0, 1, 4], [54, 62, 12, 0, 99], [87, 64, 81, 33, 0]]} | ${620}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMaxTotalHappiness(matrix)).toBe(result);
  });
});
