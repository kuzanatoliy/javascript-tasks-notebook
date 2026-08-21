const { restoreArray } = require('./B');

describe('1739B. Array Recovery', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 0, 2, 5]}    | ${[1, 1, 3, 8]}
    ${2} | ${[2, 6, 3]}       | ${[-1]}
    ${3} | ${[0, 0, 0, 0, 0]} | ${[0, 0, 0, 0, 0]}
  `('Base test: $n', ({ arr, col, result }) => {
    expect(restoreArray(arr, col)).toStrictEqual(result);
  });
});
