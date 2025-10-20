const { getMap } = require('./C');

describe('996C. Letters', () => {
  it.each`
    n    | counts              | letters                   | result
    ${1} | ${[10, 15, 12]}     | ${[1, 9, 12, 23, 26, 37]} | ${[[1, 1], [1, 9], [2, 2], [2, 13], [3, 1], [3, 12]]}
    ${2} | ${[5, 10000000000]} | ${[5, 6, 9999999999]}     | ${[[1, 5], [2, 1], [2, 9999999994]]}
  `('Base test: $n', ({ counts, letters, result }) => {
    expect(getMap(counts, letters)).toStrictEqual(result);
  });
});
