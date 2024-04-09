const { getPairs } = require('./B');

describe('1370B. GCD Compression', () => {
  it.each`
    n    | array                                  | result
    ${1} | ${[1, 2, 3, 4, 5, 6]}                  | ${[[2, 4], [1, 3]]}
    ${2} | ${[5, 7, 9, 10]}                       | ${[[1, 2]]}
    ${3} | ${[1, 3, 3, 4, 5, 90, 100, 101, 2, 3]} | ${[[4, 6], [7, 9], [1, 2], [3, 5]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPairs(array)).toStrictEqual(result);
  });
});
