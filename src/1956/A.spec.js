const { getCountsOfWinners } = require('./A');

describe("1956A. Nene's Game", () => {
  it.each`
    n    | arr                | counts          | result
    ${1} | ${[3, 5]}          | ${[5]}          | ${[2]}
    ${2} | ${[2, 4, 6, 7, 9]} | ${[1, 3, 5]}    | ${[1, 1, 1]}
    ${3} | ${[3, 4, 5, 6, 7]} | ${[1, 2, 3, 4]} | ${[1, 2, 2, 2]}
    ${4} | ${[69, 96]}        | ${[1, 10, 100]} | ${[1, 10, 68]}
    ${5} | ${[100]}           | ${[50]}         | ${[50]}
    ${6} | ${[10, 20, 30]}    | ${[1, 10, 100]} | ${[1, 9, 9]}
  `('Base test: $n', ({ arr, counts, result }) => {
    expect(getCountsOfWinners(arr, counts)).toStrictEqual(result);
  });
});
