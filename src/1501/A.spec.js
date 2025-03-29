const { getTime } = require('./A');

describe('1501A. Alexey and Train', () => {
  it.each`
    n    | lines                                            | times              | result
    ${1} | ${[[2, 4], [10, 12]]}                            | ${[0, 2]}          | ${12}
    ${2} | ${[[1, 4], [7, 8], [9, 10], [13, 15], [19, 20]]} | ${[1, 2, 3, 4, 5]} | ${32}
  `('Base test: $n', ({ lines, times, result }) => {
    expect(getTime(lines, times)).toStrictEqual(result);
  });
});
