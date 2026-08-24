const { restoreArray } = require('./D');

describe('2044D. Harder Problem', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[1, 2]}                         | ${[1, 2]}
    ${2} | ${[1, 1, 1, 2]}                   | ${[1, 2, 3, 4]}
    ${3} | ${[4, 5, 5, 5, 1, 1, 2, 1]}       | ${[4, 5, 1, 2, 3, 6, 7, 8]}
    ${4} | ${[1, 1, 2, 2, 1, 1, 3, 3, 1, 1]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  `('Base test: $n', ({ arr, result }) => {
    expect(restoreArray(arr)).toStrictEqual(result);
  });
});
