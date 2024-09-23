const { getNumbers } = require('./C');

describe('1548A. Web of Lies', () => {
  it.each`
    n    | count | friends                     | queries                             | result
    ${1} | ${4}  | ${[[2, 1], [1, 3], [3, 4]]} | ${[[3], [1, 2, 3], [2, 3, 1], [3]]} | ${[2, 1]}
    ${2} | ${4}  | ${[[2, 3], [3, 4], [4, 1]]} | ${[[3]]}                            | ${[1]}
  `('Base test: $n', ({ count, friends, queries, result }) => {
    expect(getNumbers(count, friends, queries)).toStrictEqual(result);
  });
});
