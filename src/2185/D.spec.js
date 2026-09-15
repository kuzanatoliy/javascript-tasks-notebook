const { transformArray } = require('./D');

describe('2185D. OutOfMemoryError', () => {
  it.each`
    n    | h    | arr                | op                                  | result
    ${1} | ${5} | ${[1, 2, 1]}       | ${[[1, 4], [2, 4], [3, 3], [2, 0]]} | ${[1, 2, 4]}
    ${2} | ${1} | ${[1, 1, 1, 1, 1]} | ${[[1, 1], [1, 1], [2, 1]]}         | ${[1, 1, 1, 1, 1]}
    ${3} | ${1} | ${[1, 0, 0, 0]}    | ${[[1, 1], [4, 4], [3, 3], [4, 4]]} | ${[1, 0, 0, 0]}
  `('Base test: $n', ({ h, arr, op, result }) => {
    expect(transformArray(h, arr, op)).toStrictEqual(result);
  });
});
