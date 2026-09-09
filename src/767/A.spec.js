const { getOrder } = require('./A');

describe('768A. Snacktower', () => {
  it.each`
    n    | arr                                | result
    ${1} | ${[3, 1, 2]}                       | ${[[3], [], [2, 1]]}
    ${2} | ${[4, 5, 1, 2, 3]}                 | ${[[], [5, 4], [], [], [3, 2, 1]]}
    ${3} | ${[5, 1, 6, 2, 8, 3, 4, 10, 9, 7]} | ${[[], [], [], [], [], [], [], [10], [9, 8], [7, 6, 5, 4, 3, 2, 1]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOrder(arr)).toStrictEqual(result);
  });
});
