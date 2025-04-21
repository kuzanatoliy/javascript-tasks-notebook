const { getNextPositions } = require('./A');

describe('1769A. Узкая дорога', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[20, 30, 50, 100]}              | ${[19, 28, 47, 96]}
    ${2} | ${[1, 2, 3, 4, 5]}                | ${[0, 1, 2, 3, 4]}
    ${3} | ${[5, 9, 10, 15, 17, 18, 19, 22]} | ${[4, 7, 8, 11, 12, 13, 14, 15]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getNextPositions(arr)).toStrictEqual(result);
  });
});
