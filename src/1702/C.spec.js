const { isItPossibleToReach } = require('./C');

describe('1702C. Train and Queries', () => {
  it.each`
    n    | stations                 | queries                                     | result
    ${1} | ${[3, 7, 1, 5, 1, 4]}    | ${[[3, 5], [1, 7], [3, 10]]}                | ${['YES', 'NO', 'NO']}
    ${2} | ${[1, 2, 1]}             | ${[[2, 1], [1, 2], [4, 5]]}                 | ${['YES', 'YES', 'NO']}
    ${3} | ${[2, 1, 1, 1, 2, 4, 4]} | ${[[1, 3], [1, 4], [2, 1], [4, 1], [1, 2]]} | ${['NO', 'YES', 'YES', 'NO', 'YES']}
  `('Base test: $n', ({ stations, queries, result }) => {
    expect(isItPossibleToReach(stations, queries)).toStrictEqual(result);
  });
});
