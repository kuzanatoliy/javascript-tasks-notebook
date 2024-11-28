const { getCountOfOperations } = require('./C');

describe('1733A. Consecutive Sum', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[7, 8]}                   | ${[]}
    ${2} | ${[1, 1000000000, 3, 0, 5]} | ${[[1, 5], [1, 2], [3, 5], [1, 4]]}
    ${3} | ${[0]}                      | ${[]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toStrictEqual(result);
  });
});
