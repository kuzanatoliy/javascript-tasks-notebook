const { getOriginalArr } = require('./B');

describe('1325B. Maximums', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[0, 1, 1, -2, 1]}               | ${[0, 1, 2, 0, 3]}
    ${2} | ${[1000, 999999000, -1000000000]} | ${[1000, 1000000000, 0]}
    ${3} | ${[2, 1, 2, 2, 3]}                | ${[2, 3, 5, 7, 10]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOriginalArr(arr)).toStrictEqual(result);
  });
});
